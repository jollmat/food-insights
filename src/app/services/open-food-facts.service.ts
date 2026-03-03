import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, catchError, of, BehaviorSubject } from 'rxjs';
import { Commerce, OpenFoodFactsProduct, ProductPrice } from '../model/interfaces/open-food-facts-product.interface';

@Injectable({
  providedIn: 'root'
})
export class OpenFoodFactsService {
  private openFoodApiUrl = 'https://world.openfoodfacts.org/api/v2/product';
  private jsonStorageApiKey = 'c9c418a5-5e82-4e6b-98b7-a54cdc753c3d';
  private jsonStorageProductsApiUrl = `https://api.jsonstorage.net/v1/json/a194f6bb-6aa4-43f3-b7c7-888b963187b2/35d8b5c0-7445-40d2-b2d2-79aa942b4ee4?apiKey=${this.jsonStorageApiKey}`;
  private jsonStoragePricesApiUrl = `https://api.jsonstorage.net/v1/json/a194f6bb-6aa4-43f3-b7c7-888b963187b2/c6da72a6-b8b0-4790-9556-1fe6fb84d5dc?apiKey=${this.jsonStorageApiKey}`;
  private jsonStorageCommercesApiUrl = `https://api.jsonstorage.net/v1/json/a194f6bb-6aa4-43f3-b7c7-888b963187b2/61924688-bde2-4fb8-8d55-62d1cae4f958?apiKey=${this.jsonStorageApiKey}`;

  private APP_FOOD_INSIGHTS_PRODUCTS = 'APP_FOOD_INSIGHTS_PRODUCTS';
  private APP_FOOD_INSIGHTS_PRICES = 'APP_FOOD_INSIGHTS_PRICES';
  private APP_FOOD_INSIGHTS_COMMERCES = 'APP_FOOD_INSIGHTS_COMMERCES';

  jsonStorageApiOn$ = new BehaviorSubject<boolean>(true);

  constructor(private http: HttpClient) {}

    /**
   * Fetch food product details by barcode
   * @param code Barcode (EAN, UPC, etc.)
   */
  fetchProduct(code: string): Observable<OpenFoodFactsProduct | undefined> {
    const url = `${this.openFoodApiUrl}/${code}.json`;
    return this.http.get<any>(url).pipe(
      map((res) => res.status === 1 ? this.getSimplifiedProduct(res.product as OpenFoodFactsProduct) : undefined),
      catchError((e) => {
        return of(undefined);
      })
    );
  }

  fetchCommerces(fromLocalStorage = false): Observable<Commerce[]> {
    if (fromLocalStorage) {
      const storedData = localStorage.getItem(this.APP_FOOD_INSIGHTS_COMMERCES);
      let res = [];
      if (storedData) {
        res = JSON.parse(storedData);
      }
      return of (res);
    } else {
      return this.http.get<Commerce[]>(`${this.jsonStorageCommercesApiUrl}&t=${Date.now()}`).pipe(
        map((_commerces) => {
          localStorage.setItem(this.APP_FOOD_INSIGHTS_COMMERCES, JSON.stringify(_commerces));
          return _commerces;
        }),
        catchError((e) => {
          return this.fetchCommerces(true);
        })
      );
    }
  }

  fetchStoredProductPrices(fromLocalStorage = false): Observable<ProductPrice[]> {
    if (fromLocalStorage) {
      const storedData = localStorage.getItem(this.APP_FOOD_INSIGHTS_PRICES);
      let res = [];
      if (storedData) {
        res = JSON.parse(storedData);
      }
      return of (res);
    } else {
      return this.http.get<ProductPrice[]>(`${this.jsonStoragePricesApiUrl}&t=${Date.now()}`).pipe(
        map((_prices) => {
          localStorage.setItem(this.APP_FOOD_INSIGHTS_PRICES, JSON.stringify(_prices));
          return _prices;
        }),
        catchError((e) => {
          return this.fetchStoredProductPrices(true);
        })
      );
    }
  }

  fetchStoredProducts(fromLocalStorage = false): Observable<OpenFoodFactsProduct[]> {
    if (fromLocalStorage) {
      const storedData = localStorage.getItem(this.APP_FOOD_INSIGHTS_PRODUCTS);
      let res = [];
      if (storedData) {
        res = JSON.parse(storedData);
      }
      return of (res);
    } else {
      this.jsonStorageApiOn$.next(true);
      return this.http.get<OpenFoodFactsProduct[]>(`${this.jsonStorageProductsApiUrl}&t=${Date.now()}`).pipe(
        map((_products) => { 
          const simplifiedProducts: OpenFoodFactsProduct[] = _products.map((_product) => {
            return this.getSimplifiedProduct(_product);
          });
          localStorage.setItem(this.APP_FOOD_INSIGHTS_PRODUCTS, JSON.stringify(simplifiedProducts));
          return simplifiedProducts;
        }),
        catchError((e) => {
          this.jsonStorageApiOn$.next(false);
          return this.fetchStoredProducts(true);
        })
      );
    }
  }

  saveStoredProducts(products: OpenFoodFactsProduct[], fromLocalStorage = false): Observable<boolean> {
    localStorage.setItem(this.APP_FOOD_INSIGHTS_PRODUCTS, JSON.stringify(products));
    if (!fromLocalStorage && !this.jsonStorageApiOn$.getValue()) {
      return this.saveStoredProducts(products, true);
    }
    if (fromLocalStorage) {
      localStorage.setItem(this.APP_FOOD_INSIGHTS_PRODUCTS, JSON.stringify(products.map((_product) => this.getSimplifiedProduct(_product))));
      return of (true);
    } else {
      return this.http.put<OpenFoodFactsProduct[]>(`${this.jsonStorageProductsApiUrl}&t=${Date.now()}`, products.map((_product) => this.getSimplifiedProduct(_product))).pipe(
        map(() => {
          localStorage.setItem(this.APP_FOOD_INSIGHTS_PRODUCTS, JSON.stringify(products.map((_product) => this.getSimplifiedProduct(_product))));
          return true;
        }),
        catchError((e) => {
          return this.saveStoredProducts(products, true);
        })
      );
    }
  }

  saveStoredProductPrices(prices: ProductPrice[], fromLocalStorage = false): Observable<boolean> {
    localStorage.setItem(this.APP_FOOD_INSIGHTS_PRICES, JSON.stringify(prices));
    if (!fromLocalStorage && !this.jsonStorageApiOn$.getValue()) {
      return this.saveStoredProductPrices(prices, true);
    }
    if (fromLocalStorage) {
      localStorage.setItem(this.APP_FOOD_INSIGHTS_PRICES, JSON.stringify(prices));
      return of (true);
    } else {
      return this.http.put<ProductPrice[]>(`${this.jsonStoragePricesApiUrl}&t=${Date.now()}`, prices).pipe(
        map(() => true),
        catchError((e) => {
          return this.saveStoredProductPrices(prices, true);
        })
      );
    }
  }

  private getSimplifiedProduct(product: OpenFoodFactsProduct): OpenFoodFactsProduct {

    const original = product;

    const {
      additives_original_tags,
      amino_acids_prev_tags,
      amino_acids_tags,
      categories_hierarchy,
      categories_old,
      category_properties,
      categories_properties_tags,
      checkers_tags,
      codes_tags,
      compared_to_category,
      correctors_tags,
      countries_beforescanbot,
      countries_hierarchy,
      countries_tags,
      creator,
      data_quality_bugs_tags,
      data_quality_info_tags,
      data_quality_warnings_tags,
      data_quality_tags,
      data_quality_errors_tags,
      data_quality_dimensions,
      data_sources,
      data_sources_tags,
      debug_param_sorted_langs,
      ecoscore_data,
      editors_tags,
      emb_codes,
      emb_codes_orig,
      emb_codes_tags,
      entry_dates_tags,
      environment_impact_level,
      environment_impact_level_tags,
      expiration_date,
      food_groups,
      food_groups_tags,
      images,
      informers_tags,
      ingredients_debug,
      ingredients_from_or_that_may_be_from_palm_oil_n,
      ingredients_from_palm_oil_n,
      ingredients_from_palm_oil_tags,
      ingredients_hierarchy,
      ingredients_ids_debug,
      ingredients_lc,
      ingredients_n,
      ingredients_n_tags,
      ingredients_non_nutritive_sweeteners_n,
      ingredients_original_tags,
      ingredients_percent_analysis,
      ingredients_sweeteners_n,
      ingredients_tags,
      ingredients_text_ar,
      ingredients_text_en,
      ingredients_text_es,
      ingredients_text_fr,
      ingredients_text_hu,
      ingredients_text_pt,
      ingredients_text_debug,
      ingredients_text_debug_tags,
      ingredients_text_fr_ocr_1543475309,
      ingredients_text_fr_ocr_1543475309_result,
      ingredients_text_fr_ocr_1545424194,
      ingredients_text_fr_ocr_1545424194_result,
      ingredients_text_with_allergens_bg,
      ingredients_text_with_allergens_es,
      ingredients_text_with_allergens_en,
      ingredients_text_with_allergens_fr,
      ingredients_text_with_allergens_pt,
      ingredients_without_ciqual_codes,
      ingredients_without_ciqual_codes_n,
      ingredients_without_ecobalyse_ids,
      ingredients_without_ecobalyse_ids_n,
      interface_version_created,
      interface_version_modified,
      known_ingredients_n,
      labels_hierarchy,
      labels_lc,
      labels_old,
      labels_tags,
      languages,
      languages_codes,
      languages_hierarchy,
      languages_tags,
      last_edit_dates_tags,
      last_editor,
      last_image_dates_tags,
      last_image_t,
      last_modified_by,
      last_modified_t,
      last_updated_t,
      lc,
      main_countries_tags,
      manufacturing_places,
      manufacturing_places_tags,
      max_imgid,
      minerals_prev_tags,
      minerals_tags,
      misc_tags,
      nova_group_debug,
      nova_groups_markers,
      nova_groups_tags,
      nucleotides_prev_tags,
      nucleotides_tags,
      nutrient_levels_tags,
      nutriscore_2021_tags,
      nutriscore_2023_tags,
      nutriscore_score_opposite,
      obsolete,
      obsolete_since_date,
      origin_ar,
      origin_en,
      origin_es,
      origin_fr,
      origin_hu,
      origin_pt,
      origins_lc,
      origins_old,
      origins_tags,
      other_nutritional_substances_tags,
      packaging_hierarchy,
      packaging_lc,
      packaging_materials_tags,
      packaging_old,
      packaging_old_before_taxonomization,
      packaging_recycling_tags,
      packaging_shapes_tags,
      packaging_tags,
      packaging_text,
      packaging_text_ar,
      packaging_text_en,
      packaging_text_es,
      packaging_text_fr,
      packaging_text_hu,
      packaging_text_pt,
      packagings,
      packagings_complete,
      packagings_materials,
      packagings_n,
      photographers_tags,
      pnns_groups_1,
      pnns_groups_1_tags,
      pnns_groups_2,
      pnns_groups_2_tags,
      popularity_key,
      popularity_tags,
      product_name_ar,
      product_name_en,
      product_name_es,
      product_name_fr,
      product_name_hu,
      product_name_pt,
      purchase_places_tags,
      removed_countries_tags,
      rev,
      scans_n,
      schema_version,
      selected_images,
      serving_quantity,
      serving_quantity_unit,
      serving_size,
      sortkey,
      states,
      states_hierarchy,
      states_tags,
      stores_tags,
      teams,
      teams_tags,
      traces_from_user,
      traces_hierarchy,
      traces_lc,
      traces_tags,
      unique_scans_n,
      unknown_ingredients_n,
      unknown_nutrients_tags,
      update_key,
      vitamins_prev_tags,
      vitamins_tags,
      weighers_tags,
      prices,

      ...cleanObject 
    } = original;

    return cleanObject;
  }
}
