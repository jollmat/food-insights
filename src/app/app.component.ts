import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, Signal, signal, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BarcodeScannerComponent } from "./components/barcode-scanner/barcode-scanner.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OpenFoodFactsService } from './services/open-food-facts.service';
import { OpenFoodFactsProduct } from './model/interfaces/open-food-facts-product.interface';
import { debounceTime, distinctUntilChanged, fromEvent, map, min, Subscription } from 'rxjs';
import { NgSelectModule } from '@ng-select/ng-select';
import { HighchartsChartModule } from 'highcharts-angular';
import * as Highcharts from 'highcharts';
import { DeviceService, DeviceType } from './services/device.service';

export type DisplayMode = 'GRID' | 'LIST';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, BarcodeScannerComponent, FormsModule, NgSelectModule, HighchartsChartModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('barcodeInput', { static: false }) barcodeInputElement!: ElementRef;
  @ViewChild('searchInput', { static: false }) searchInputElement!: ElementRef;

  @ViewChild('scannerModal') scannerModalElement!: ElementRef<HTMLDivElement>;
  @ViewChild('productModal') productModalElement!: ElementRef<HTMLDivElement>;
  @ViewChild('comparatorModal') comparatorModalElement!: ElementRef<HTMLDivElement>;
  modalInstance: any;

  deviceType!: DeviceType;
  displayMode: DisplayMode = 'GRID';

  deviceTypeSubscription?: Subscription;

  // Sort
  sortByItems: { field: string, label: string }[] = [
    { field: 'product_name', label: 'Name' },
    { field: 'brands', label: 'Brand' },
    { field: 'nutriscore_grade', label: 'Nutriscore' }
  ];
  sortByField = this.sortByItems[0].field;

  //Search
  searchtext = '';

  barcodeInputDebounceSubscription?: Subscription;
  searchInputDebounceSubscription?: Subscription;
  fetchProductsSubscription?: Subscription;
  saveProductsSubscription?: Subscription;

  openFoodFactsLoadProductSubscription?: Subscription;
  
  title = 'food-insights';

  barcode = '';
  barcodeTemp = ''
  scannerOn = signal(false);

  searchingProduct = signal(false);
  repeatedProduct = signal(false);
  productFound?: OpenFoodFactsProduct;

  STORED_PRODUCTS_LS_KEY = 'APP_OPEN_FOOD_FACTS_PRODUCTS';
  products: OpenFoodFactsProduct[] = [];

  selectedProduct?: OpenFoodFactsProduct;
  selectedRemovalProduct?: OpenFoodFactsProduct;

  selectedProducts: OpenFoodFactsProduct[] = [];
  maxSelectableProducts = signal(4);

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: {
    singleProductNutriments: { options: Highcharts.Options, built: boolean },
    singleProductNutrimentsPercent: { options: Highcharts.Options, built: boolean },
    singleProductIngredients: { options: Highcharts.Options, built: boolean },
    multipleProductIngredients: { options: Highcharts.Options, built: boolean }[],
    multipleProductNutriments: { options: Highcharts.Options, built: boolean },
    multipleProductNutrimentsPercent: { options: Highcharts.Options, built: boolean }
  } = {
    singleProductIngredients: { options: {}, built: false },
    singleProductNutriments: { options: {}, built: false },
    singleProductNutrimentsPercent: { options: {}, built: false },
    multipleProductIngredients: [],
    multipleProductNutriments: { options: {}, built: false },
    multipleProductNutrimentsPercent: { options: {}, built: false }
  };

  constructor(
    private readonly openFoodFactsService: OpenFoodFactsService,
    private readonly deviceService: DeviceService
  ){}
  
  codeChanged(newCode: string) {
    console.log('codeChanged()', newCode);
    this.barcodeTemp = newCode;

    this.selectBarcode();
  }

  async openScanner() {
    const bootstrap = await import('bootstrap');
    const modal = new bootstrap.Modal(this.scannerModalElement.nativeElement);
    this.modalInstance = modal;
    modal.show();
  }

  closeModal() {
    this.modalInstance?.hide();
  }

  toggleScanner() {
    this.scannerOn.set(!this.scannerOn());

    setTimeout(() => {
      if (this.scannerOn() && this.barcodeInputElement) {
        this.barcode = '';
        this.barcodeTemp = '';
        this.barcodeInputDebounceSubscription = fromEvent(this.barcodeInputElement.nativeElement, 'input')
        .pipe(
          map((event: any) => event.target.value),
          debounceTime(500), // ⏳ espera 500ms tras dejar de escribir
          distinctUntilChanged() // solo emite si el valor cambia
        )
        .subscribe(value => {
          this.barcode = value;
          if (this.barcode.trim().length>0) {
            this.findProduct();
          }
        });
      }
    }, 500);
    
  }

  getNutriscoreText(nutriscoreValue: string): string {
    let text = '';
    switch(nutriscoreValue) {
      case 'a':
        text = 'Very good nutritional quality';
        break;
      case 'b':
        text = 'Good quality';
        break;
      case 'c':
        text = 'Average quality';
        break;
      case 'd':
        text = 'Bad quality';
        break;
      case 'e':
        text = 'Very poor quality';
        break;
    }
    return text;
  }

  getAllergens(product: OpenFoodFactsProduct) {
    if (!product.allergens) {
      return '-';
    }
    return product.allergens.split('en:').join('');
  }

  selectBarcode() {
    this.barcode = this.barcodeTemp;
    this.findProduct();
  }

  findProduct() {
    if (this.barcode.length>0) {
      this.searchingProduct.set(true);
      this.repeatedProduct.set(false);
      this.openFoodFactsLoadProductSubscription = this.openFoodFactsService.fetchProduct(this.barcode).subscribe((_product) => {
        this.productFound = _product;
        this.searchingProduct.set(false);

        const existingProduct: boolean = this.products.some((_p) => _p._id===this.productFound?._id );
        this.repeatedProduct.set(this.productFound!==undefined && this.products && existingProduct);
      });
    }
  }

  addProduct() {
    if (this.productFound && !this.products.some((_product) => _product._id===this.productFound?._id)) {
      this.products.push(this.productFound);
      //localStorage.setItem(this.STORED_PRODUCTS_LS_KEY, JSON.stringify(this.products));
      this.saveProductsSubscription = this.openFoodFactsService.saveStoredProducts(this.products).subscribe((saved) => {
        this.toggleScanner();
        this.productFound = undefined;
        this.barcode = '';
      });
    }
  }

  removeProduct(productId: string) {
    this.products = this.products.filter((_product) => _product._id!==productId);
    //localStorage.setItem(this.STORED_PRODUCTS_LS_KEY, JSON.stringify(this.products));
    this.saveProductsSubscription = this.openFoodFactsService.saveStoredProducts(this.products).subscribe(() => {});
  }

  async viewProduct(product: OpenFoodFactsProduct) {
    this.selectedProduct = product;
    console.log('viewProduct()', product);

    const bootstrap = await import('bootstrap');
    const modal = new bootstrap.Modal(this.productModalElement.nativeElement);
    this.modalInstance = modal;
    modal.show();

    // Build chart first
    setTimeout(() => {
      this.buildProductNutrimentsChart();
      if (this.selectedProduct?.ingredients && this.selectedProduct.ingredients.length>0) {
        this.buildProductIngredientsChart();
      }
    }, 10);
  }

  ngAfterViewInit(): void {
    this.searchInputDebounceSubscription = fromEvent(this.searchInputElement.nativeElement, 'input')
        .pipe(
          map((event: any) => event.target.value),
          debounceTime(500), // ⏳ espera 500ms tras dejar de escribir
          distinctUntilChanged() // solo emite si el valor cambia
        )
        .subscribe(value => {
          this.searchtext = value;
          console.log(this.searchtext);
        });
  }

  matchesSearch(product: OpenFoodFactsProduct): boolean {
    return this.searchtext.trim().length === 0 || JSON.stringify(product).toLowerCase().includes(this.searchtext.toLowerCase());
  }

  isCompared(product: OpenFoodFactsProduct): boolean {
    return this.selectedProducts.some((_p) => _p._id===product._id);
  }

  toggleCompare(product: OpenFoodFactsProduct) {
    if (!this.isCompared(product)) {
      this.selectedProducts.push(product);
    } else {
      this.selectedProducts = this.selectedProducts.filter((_product) => _product._id!==product._id);
    }    
    if (this.selectedProducts.length===0) {
      this.closeModal();
    }
  }

  singleProductNutrimentsAbsRel: 'ABS' | 'REL' = 'ABS';
  toggleSingleProductNutrimentsAbsRel() {
    console.log('toggleSingleProductNutrimentsAbsRel()');
    this.singleProductNutrimentsAbsRel = (this.singleProductNutrimentsAbsRel==='ABS')?'REL':'ABS';
  }

  multipleProductNutrimentsAbsRel: 'ABS' | 'REL' = 'ABS';
  toggleMultipleProductNutrimentsAbsRel() {
    console.log('toggleMultipleProductNutrimentsAbsRel()');
    this.multipleProductNutrimentsAbsRel = (this.multipleProductNutrimentsAbsRel==='ABS')?'REL':'ABS';
  }

  private buildProductNutrimentsChart() {
    this.chartOptions.singleProductNutriments.built = false;
    this.chartOptions.singleProductNutriments.options = {
      chart: { height: 295, backgroundColor: '#ffffff' },
      title: { text: '' },
      xAxis: { categories: (this.selectedProduct)?['']:[] },
      yAxis: { title: { text: 'gr' } },
      series: [
        {
          type: 'column',
          name: 'Fat (gr)',
          data: [this.selectedProduct && this.selectedProduct.nutriments && this.selectedProduct.nutriments.fat_100g?this.selectedProduct.nutriments.fat_100g : 0]
        },
        {
          type: 'column',
          name: 'Satured Fat (gr)',
          data: [this.selectedProduct && this.selectedProduct.nutriments && this.selectedProduct.nutriments['saturated-fat_100g']?this.selectedProduct.nutriments['saturated-fat_100g'] : 0]
        },
        {
          type: 'column',
          name: 'Salt (gr)',
          data: [this.selectedProduct && this.selectedProduct.nutriments && this.selectedProduct.nutriments.salt_100g?this.selectedProduct.nutriments.salt_100g : 0]
        },
        {
          type: 'column',
          name: 'Sodium (gr)',
          data: [this.selectedProduct && this.selectedProduct.nutriments && this.selectedProduct.nutriments.sodium_100g?this.selectedProduct.nutriments.sodium_100g : 0]
        },
        {
          type: 'column',
          name: 'Sugars (gr)',
          data: [this.selectedProduct && this.selectedProduct.nutriments && this.selectedProduct.nutriments.sugars_100g?this.selectedProduct.nutriments.sugars_100g : 0]
        },
        {
          type: 'column',
          name: 'Carbohydrates (gr)',
          data: [this.selectedProduct && this.selectedProduct.nutriments && this.selectedProduct.nutriments.carbohydrates_100g?this.selectedProduct.nutriments.carbohydrates_100g : 0]
        },
        {
          type: 'column',
          name: 'Proteins (gr)',
          data: [this.selectedProduct && this.selectedProduct.nutriments && this.selectedProduct.nutriments.proteins_100g?this.selectedProduct.nutriments.proteins_100g : 0]
        }
      ],
      credits: { enabled: false }
    };
    this.chartOptions.singleProductNutriments.built = true;

    this.chartOptions.singleProductNutrimentsPercent.built = false;
    this.chartOptions.singleProductNutrimentsPercent.options = {
      chart: { type: 'pie', backgroundColor: '#ffffff', height:'300px' },
      title: { text: '' },
      tooltip: { pointFormat: '{point.percentage:.1f}%</b>' },
      accessibility: { point: { valueSuffix: '%' } },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            distance: -50,
            color: 'white',
            format: '{point.name}: {point.percentage:.1f} %',
            style: { fontWeight: 'bold', textOutline: '1px contrast' }
          }
        }
      },
      series: [
        {
          name: 'Ingredients',
          type: 'pie',
          data: this.selectedProduct?.nutriments?[
            {name: 'Fat', y: this.selectedProduct.nutriments.fat_100g},
            {name: 'Saturated fat', y: this.selectedProduct.nutriments['saturated-fat_100g']},
            {name: 'Salt', y: this.selectedProduct.nutriments.salt_100g},
            {name: 'Sodium', y: this.selectedProduct.nutriments.sodium_100g},
            {name: 'Sugars', y: this.selectedProduct.nutriments.sugars_100g},
            {name: 'Carbohydrates', y: this.selectedProduct.nutriments.carbohydrates_100g},
            {name: 'Proteins', y: this.selectedProduct.nutriments.proteins_100g}
          ]:[]
          /*
          data: (this.selectedProduct?.nutriments)? this.selectedProduct?.nutriments.map((_nutriment) => {
            return { name: this.capitalizeFirst(_nutriment.text.trim().replace(/\b[a-z]{2}:/g, "").replace(/_/g, " ")), y: _nutriment.percent_estimate }
          }):[]*/
        }
      ],
      credits: { enabled: false }
    };
    this.chartOptions.singleProductNutrimentsPercent.built = true;
  }

  private buildProductIngredientsChart() {
    console.log(this.selectedProduct?.ingredients);
    this.chartOptions.singleProductIngredients.built = false;
    this.chartOptions.singleProductIngredients.options = {
      chart: { type: 'pie', backgroundColor: '#ffffff' },
      title: { text: '' },
      tooltip: { pointFormat: '{point.percentage:.1f}%</b>' },
      accessibility: { point: { valueSuffix: '%' } },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            distance: -50,
            color: 'white',
            format: '{point.name}: {point.percentage:.1f} %',
            style: { fontWeight: 'bold', textOutline: '1px contrast' }
          }
        }
      },
      series: [
        {
          name: 'Ingredients',
          type: 'pie',
          data: (this.selectedProduct?.ingredients)? this.selectedProduct?.ingredients.map((_ingredient) => {
            return { name: this.capitalizeFirst((_ingredient.text || '').trim().replace(/\b[a-z]{2}:/g, "").replace(/_/g, " ")), y: _ingredient.percent_estimate }
          }):[]
        }
      ],
      credits: { enabled: false }
    };
    this.chartOptions.singleProductIngredients.built = true;
  }

  private buildComparatorNutrimentsChart() {
    this.chartOptions.multipleProductNutriments.built = false;
    this.chartOptions.multipleProductNutriments.options = {
      chart: { backgroundColor: '#ffffff' },
      title: { text: 'Nutriments Overview' },
      xAxis: { categories: this.selectedProducts.map((_p) => _p.product_name + ` (${_p.brands})`) },
      yAxis: { title: { text: 'Value' } },
      series: [
        {
          type: 'column',
          name: 'Fat (gr)',
          data: this.selectedProducts.map((_p) => _p.nutriments?.fat_100g || 0)
        },
        {
          type: 'column',
          name: 'Satured Fat (gr)',
          data: this.selectedProducts.map((_p) => (_p.nutriments && _p.nutriments['saturated-fat_100g'])? _p.nutriments['saturated-fat_100g'] : 0)
        },
        {
          type: 'column',
          name: 'Salt (gr)',
          data: this.selectedProducts.map((_p) => _p.nutriments?.salt_100g || 0)
        },
        {
          type: 'column',
          name: 'Sodium (gr)',
          data: this.selectedProducts.map((_p) => _p.nutriments?.sodium_100g || 0)
        },
        {
          type: 'column',
          name: 'Sugars (gr)',
          data: this.selectedProducts.map((_p) => _p.nutriments?.sugars_100g || 0)
        },
        {
          type: 'column',
          name: 'Carbohydrates (gr)',
          data: this.selectedProducts.map((_p) => _p.nutriments?.carbohydrates_100g || 0)
        },
        {
          type: 'column',
          name: 'Proteins (gr)',
          data: this.selectedProducts.map((_p) => _p.nutriments?.proteins_100g || 0)
        }
      ],
      credits: { enabled: false }
    };
    this.chartOptions.multipleProductNutriments.built = true;

    this.chartOptions.multipleProductNutrimentsPercent.built = false;
    this.chartOptions.multipleProductNutrimentsPercent.options = {
      chart: {
        type: 'pie'
      },
      title: {
        text: 'Nutriments Overview (%)'
      },
      tooltip: {
        headerFormat: '<span style="font-size: 13px;"><b>{series.name}</b></span><br/>',
        pointFormat: '{point.name}: {point.y} ({point.percentage:.1f}%)'
      },
      series: this.selectedProducts.map((_product, idx) => {
        return {
          name: this.capitalizeFirst(_product.product_name),

          type: 'pie',
          size: '22%',
          center: (idx===0)?['25%', '50%']:['75%', '50%'],
          data: [
            ['Fat', _product.nutriments?.fat_100g || 0],
            ['Satured fat', (_product.nutriments && _product.nutriments['saturated-fat_100g'])? _product.nutriments['saturated-fat_100g'] : 0],
            ['Salt', _product.nutriments?.salt_100g || 0],
            ['Sodium', _product.nutriments?.sodium_100g || 0],
            ['Sugars', _product.nutriments?.sugars_100g || 0],
            ['Carbohydrates', _product.nutriments?.carbohydrates_100g || 0],
            ['Proteins', _product.nutriments?.proteins_100g || 0]
          ]
        }
      })
    };
    console.log(this.chartOptions.multipleProductNutrimentsPercent);
    this.chartOptions.multipleProductNutrimentsPercent.built = true;
  }

  private buildComparatorIngredientsCharts() {
    this.chartOptions.multipleProductIngredients = [];
    this.selectedProducts.forEach((_product, idx) => {
      this.chartOptions.multipleProductIngredients.push({
        built: true,
        options: (_product.ingredients && _product.ingredients?.length>0)?{
          chart: { type: 'pie', backgroundColor: '#ffffff' },
          title: { text: '' },
          tooltip: { pointFormat: '{point.percentage:.1f}%</b>' },
          accessibility: { point: { valueSuffix: '%' } },
          plotOptions: {
            pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                enabled: true,
                distance: -50,
                color: 'white',
                format: '{point.name}: {point.percentage:.1f} %',
                style: { fontWeight: 'bold', textOutline: '1px contrast' }
              }
            }
          },
          series: [
            {
              name: 'Ingredients',
              type: 'pie',
              data: (this.selectedProducts[idx].ingredients)? this.selectedProducts[idx].ingredients.map((_ingredient) => {
                return { name: this.capitalizeFirst((_ingredient.text || '').trim().replace(/\b[a-z]{2}:/g, "").replace(/_/g, " ")), y: _ingredient.percent_estimate }
              }):[]
            }
          ],
          credits: { enabled: false }
        }:{}
      });
    });
  }

  async viewComparator() {

    // Build chart first
    this.buildComparatorNutrimentsChart();
    this.buildComparatorIngredientsCharts();

    const bootstrap = await import('bootstrap');
    const modal = new bootstrap.Modal(this.comparatorModalElement.nativeElement);
    this.modalInstance = modal;
    modal.show();
  }

  getProductAttrValue(product: OpenFoodFactsProduct, attributes: string[], alternativeAttributes?: string[]): any {
    let value = '-';

    switch(attributes[0]) {
      case 'nutriscore_grade':
        if (product.nutriscore_grade!=='unknown') {
          value = `<div class="nutriscore-grade text-uppercase td-content ${product.nutriscore_grade}" title="${this.getNutriscoreText(product.nutriscore_grade || '')}">${product.nutriscore_grade}</div>`;
        }
        break;
      case 'ingredients':
        let ingredients = this.getValueFromPath(product, attributes[0]) as {text: string}[] || undefined;
        if (ingredients) {
          ingredients = ingredients.map((_ingredient) => {
              return {text: _ingredient.text.trim().replace(/_/g, " ").charAt(0).toUpperCase() + _ingredient.text.replace(/_/g, " ").toLowerCase().slice(1)};
          });
          value = '<ul class="m-0 p-0">';
          value += ingredients? ingredients.map((_ingredient) => `<li class="truncate-text" title="${_ingredient.text}">${_ingredient.text.trim().charAt(0).toUpperCase() + _ingredient.text.trim().toLowerCase().slice(1)}</li>`).join('') : '-';
          value += '</ul>';
        }
        break;
      case 'allergens':
      case 'packaging':
        let valueStr = this.getValueFromPath(product, attributes[0]) as string || undefined;
        if (valueStr) {
          let valueArray = valueStr.split(',').map((_valueItem) => {
            return this.capitalizeFirst(_valueItem.trim().replace(/\b[a-z]{2}:/g, ""));
          });
          if (valueArray.length===1) {
            return valueArray[0];
          } else {
            value = '<ul class="m-0 p-0">';
            valueArray.forEach((_value) => {
              value+=`<li class="truncate-text" title="${_value}">${_value}</li>`;
            })
            value += '</ul>';
          }
        } else {
          value = '-';
        } 
        break;
      case 'minerals_tags':
        let minerals = this.getValueFromPath(product, attributes[0]) as string[] || undefined;
        if (minerals && minerals.length>0) {
          minerals = minerals.map((_mineral) => {
              return _mineral.replace(/\b[a-z]{2}:/g, "");
          });
          value = '<ul class="m-0 p-0">';
          value += minerals? minerals.map((_mineral) => `<li class="truncate-text" title="${_mineral.charAt(0).toUpperCase() + _mineral.toLowerCase().slice(1)}">${_mineral.charAt(0).toUpperCase() + _mineral.toLowerCase().slice(1)}</li>`).join('') : '-';
          value += '</ul>';
        } else {
          value = '-';
        }
        break;
      case 'countries':
        let countries = this.getValueFromPath(product, attributes[0]) as {text: string}[] || undefined;
        if (countries && countries.length>0) {
          if (typeof countries === 'string') {
            countries = (countries as string).split(',').map((_countryStr) => {
              return {text:_countryStr.replace(/\b[a-z]{2}:/g, "")};
            });
          }
          countries = countries.map((_country) => {
              return {text:_country.text};
          });

          if (countries.length===0) {
            value='-';
          } else if (countries.length===1) {
            value = `${countries[0].text.charAt(0).toUpperCase()+countries[0].text.toLowerCase().slice(1)}`;
          } else {
            countries = countries.map((_c) => {
              _c.text = _c.text.trim().charAt(0).toUpperCase() + _c.text.trim().toLowerCase().slice(1)
              return _c;
            });
            value = '<ul class="m-0 p-0">';
            value += countries? countries.map((_country) => `<li class="truncate-text">${_country.text}</li>`).join('') : '-';
            value += '</ul>';
          }
        }
        break;
      case 'nutrient_levels.fat':
      case 'nutrient_levels.saturated-fat':
      case 'nutrient_levels.salt':
      case 'nutrient_levels.sugars':
        let className = '';
        const attrValue = this.getValueFromPath(product, attributes[0]);
        if (attrValue==='high') {
          className = 'text-danger';
        } else if (attrValue==='moderate') {
          className = 'text-warning';
        } else if (attrValue==='low') {
          className = 'text-success';
        }
        value = (className.length>0)?`<i title="${this.getValueFromPath(product, attributes[0])}" class="fas fa-circle ${className}"></i>`:'-';
        break;
      default: 
        value = '';
        attributes.forEach((attr, idx) => {
          if (idx>0) {
            value+=' ';
          }
          let pathValue = this.getValueFromPath(product, attributes[idx]);
          value+=(pathValue && pathValue!='undefined' && pathValue!='unknown')?pathValue:'-';
        });
        value = (value && value!='undefined' && value!='unknown' && !value.startsWith('-'))?value:'-'
        break;
    }
    return value.replace(/_/g, " ");
  }

  private getValueFromPath<T extends object, R = any>(obj: T, path: string): R | undefined {
    return path.split('.').reduce((acc: any, key: string) => {
      return acc?.[key];
    }, obj);
  }

  openUrl(url: string) {
    window.open(url);
  }

  capitalizeFirst(str?: string) {
    if (!str) return str; // handle empty string
    return str
    .toLowerCase()
    .split(",")                          // split by commas
    .map(s => s.trim())                  // remove extra spaces
    .filter(Boolean)                     // remove empty entries
    .map(s => s.charAt(0).toUpperCase() + s.slice(1)) // capitalize first letter
    .join(", ");   
  }

  trackByProductId(index: number, product: OpenFoodFactsProduct): string {
    return product._id; // or any unique field
  }

  truncateText(str: string, maxLength: number) {
    if (typeof str !== 'string') return '';
    if (str.length <= maxLength) return str;
    return str.slice(0, maxLength) + '...';
  }

  sortBy(sortAttribute: string, sortBy='asc') {
    this.products.sort((a, b) => {
      return (a as any)[sortAttribute].trim().toLowerCase() > (b as any)[sortAttribute].trim().toLowerCase()?((sortBy==='asc')?1:-1):((sortBy==='asc')?-1:1);
    });
  }

  ngOnDestroy(): void {
    this.openFoodFactsLoadProductSubscription?.unsubscribe();
    this.barcodeInputDebounceSubscription?.unsubscribe();
    this.searchInputDebounceSubscription?.unsubscribe();
    this.fetchProductsSubscription?.unsubscribe();
    this.saveProductsSubscription?.unsubscribe();
  }

  getConfiguredProducts(_products: OpenFoodFactsProduct[]) {
      _products = (_products).map((_p) => {
        if (!_p.product_name || _p.product_name.trim().length===0) {
          _p.product_name = (_p.brands && _p.brands.trim().length>0)?_p.brands.trim():'Unknown';
        }
        return _p;
      });
      return _products;
  }

  fetchProducts() {
    this.fetchProductsSubscription = this.openFoodFactsService.fetchStoredProducts().subscribe((_products) => {
      if (_products) {
        this.products = this.getConfiguredProducts(_products);
        this.sortBy(this.sortByField);
      }
    });
  }

  ngOnInit(): void {

    this.fetchProducts();

    /*
    const storedProductsStr = localStorage.getItem(this.STORED_PRODUCTS_LS_KEY);
    if (storedProductsStr) {
      this.products = (JSON.parse(storedProductsStr) as OpenFoodFactsProduct[]).map((_p) => {
        if (!_p.product_name || _p.product_name.trim().length===0) {
          _p.product_name = (_p.brands && _p.brands.trim().length>0)?_p.brands.trim():'Unknown';
        }
        return _p;
      });
      this.sortBy(this.sortByField);
    }
    */
    

    this.deviceTypeSubscription = this.deviceService.deviceType$.subscribe((_deviceType) => {
      this.deviceType = _deviceType;
      if (this.deviceType==='mobile') {
        this.displayMode = 'LIST';
        this.closeModal();
        this.selectedProducts = [];
      }
    });
  }
}
