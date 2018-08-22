import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';
import { ProductService } from './product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
    if(!localStorage.getItem('token')) {
      this.router.navigate(['register-login']);
    }
    this.getProducts();
  }

  getProducts() {
    return this.productService.getProducts()
      .subscribe(
        (products: Product[]) => this.products = products,
        (error) => console.log(error)
      );
  }

  onProductSelected(productId: string) {
    this.router.navigate(['/products', productId]);
  } 
}
