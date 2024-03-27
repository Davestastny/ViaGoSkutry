import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {map, Observable, throwError} from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Product } from '../models/product.model';


@Injectable({ providedIn: 'root' })
export class ProductDataService {
  private apiUrl = 'https://viago-api.caujasutom.com/api';

  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/products`)
      .pipe(catchError(this.handleError));
  }

  getProduct(slug: string): Observable<Product> {
    console.log('Fetching Product:', slug);
    return this.http.get<Product>(`${this.apiUrl}/product/${slug}`)
      .pipe(
        tap(product => console.log('Fetched Product:', product)),
        catchError(this.handleError)
      );
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.error('Something bad happened; please try again later.', error);
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
