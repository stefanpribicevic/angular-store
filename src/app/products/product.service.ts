import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import "rxjs/Rx";
import { Observable } from 'rxjs/Observable';

const productUrl = "http://localhost:8080/store/product";
const connectionErrorMessage = "Cannot connect to server.";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: Http) { }

  getProducts() {
    return this.http.get(productUrl)
      .map((response: Response) => {
        return response.json();
      })
      .catch(
        (error: Response) => {
          return Observable.throw(connectionErrorMessage);
        }
      );
  }

  getProduct(productId: string) {
    return this.http.get(productUrl + "?id=" + productId)
      .map((response: Response) => {
        console.log(response.json());
        return response.json();
      })
      .catch(
        (error: Response) => {
          return Observable.throw(connectionErrorMessage);
        }
      );
  }
}
