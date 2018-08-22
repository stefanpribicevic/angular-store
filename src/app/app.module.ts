import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { HttpModule } from "@angular/http";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './products/product/product.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { HttpClientModule } from "@angular/common/http";

const appRoutes: Routes = [
  {path: "", component: ProductsComponent},
  {path: "products", component: ProductsComponent},
  {path: "products/:id", component: ProductComponent},
  {path: "cart", component: CartComponent},
  {path: "register-login", component: LoginRegisterComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    CartComponent,
    ProductComponent,
    LoginRegisterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    FormsModule,    
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
