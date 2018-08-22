import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { CartService } from '../../cart/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  product: Product;
  quantity: number;

  constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router, private cartService: CartService) { }

  ngOnInit() {
    this.setProduct();
  }

  setProduct() {
    this.productService.getProduct(this.route.snapshot.params['id']).subscribe(
      (product: any) => this.product = product[0],
      (error) => console.log(error)
    );
  }

  onAddToCart() {
    this.cartService.addProductToCart(this.product, this.quantity);
    this.router.navigate(['/cart']);
  }

}
