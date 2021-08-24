import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductComponent } from './product/product.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AdminComponent } from './admin/admin.component';
import { HttpClientModule } from '@angular/common/http';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateProductsComponent } from './admin/update-products/update-products.component';
import { CreateProductComponent } from './admin/create-product/create-product.component';
import { AlertComponent } from './shared/components/alert/alert.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductVariantDetailComponent } from './product/product-variant-detail/product-variant-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductComponent,
    HeaderComponent,
    ShoppingCartComponent,
    CheckoutComponent,
    AdminComponent,
    UpdateProductsComponent,
    CreateProductComponent,
    AlertComponent,
    ProductVariantDetailComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
