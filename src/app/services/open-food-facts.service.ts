import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, catchError, of } from 'rxjs';
import { OpenFoodFactsProduct } from '../model/interfaces/open-food-facts-product.interface';

@Injectable({
  providedIn: 'root'
})
export class OpenFoodFactsService {
  private apiUrl = 'https://world.openfoodfacts.org/api/v2/product';

  constructor(private http: HttpClient) {}

  /**
   * Fetch food product details by barcode
   * @param code Barcode (EAN, UPC, etc.)
   */
  fetchProduct(code: string): Observable<OpenFoodFactsProduct | undefined> {
    const url = `${this.apiUrl}/${code}.json`;
    return this.http.get<any>(url).pipe(
      map((res) => res.status === 1 ? res.product as OpenFoodFactsProduct : undefined),
      catchError(() => of(undefined))
    );
  }
}
