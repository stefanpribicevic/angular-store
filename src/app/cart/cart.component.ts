import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { CartItem } from './cart-item.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Product } from '../products/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit() {
    if (!localStorage.getItem('token')) {
      this.router.navigate(['register-login']);
    }

    this.cartItems = this.cartService.cart;
  }

  onCheckoutButtonClicked() {
    this.cartService.postPurchase()
      .subscribe(
        (data: any) => {
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
    );

    this.router.navigate(['/']);
  }
}
