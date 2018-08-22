import { Injectable } from '@angular/core';
import { CartItem } from './cart-item.model';
import { Product } from '../products/product.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private purchaseAddress = "http://localhost:8080/store/purchase";

  cart: CartItem[] = [];

  constructor(private http: HttpClient) { }

  addProductToCart(product: Product, quantity: number) {
    let productIndex = this.cart.findIndex(
      (item) => item.product._id == product._id);

    if(productIndex === -1) {
      this.cart.push({product, quantity});
    } else {
      this.cart[productIndex].quantity += quantity;
    }
  }

  postPurchase() {
    const SPREAD_DATE_OPERATOR = '-';
    const currentDate = new Date();
    const purchaseDate = currentDate.getFullYear() + SPREAD_DATE_OPERATOR 
      + (+currentDate.getMonth() + 1) + SPREAD_DATE_OPERATOR + currentDate.getDate();

    let requestObject = {
      username: localStorage.getItem('username'),
      purchaseList: this.cart.map(
        (item) => ({
          productId: item.product._id,
          quantity: item.quantity,
        })
      ),
      purchaseDate,
    };

    console.log(requestObject);

    return this.http.post(this.purchaseAddress, requestObject);
  }

}
