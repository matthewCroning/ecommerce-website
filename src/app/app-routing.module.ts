import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductComponent } from './product/product.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AdminComponent } from './admin/admin.component';
import { UpdateProductsComponent } from './admin/update-products/update-products.component';
import { CreateProductComponent } from './admin/create-product/create-product.component';


const routes: Routes = [
  {
    path: '',
    component: ProductComponent
  },
  {
    path: 'product/:product_id/:product_variant_id',
    component: ProductDetailComponent
  },
  {
    path: 'cart',
    component: ShoppingCartComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  }
  ,
  {
    path: 'admin/create',
    component: CreateProductComponent
  },
  {
    path: 'admin/update',
    component: UpdateProductsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
