import { AlertService } from './../../shared/services/alert.service';
import { ShoppingCartService } from './../../shared/services/shopping-cart.service';
import { Product } from './../../shared/models/product.model';
import { ProductService } from './../../shared/services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;
  productVariantId;
  constructor(public route: ActivatedRoute, private ProductService: ProductService, private ShoppingCartService: ShoppingCartService) {
    
    this.route.params.subscribe(params => {
      this.productVariantId = params['product_variant_id'];
      console.log(this.productVariantId);
      this.ProductService.getProduct(params['product_id']).subscribe((result: Product) =>{
        console.log(result);
        
        this.product = result[0];
        console.log(this.product[0].name);
      })
      console.log(this.product);
    });
  }

  ngOnInit() {
  
  }

  
}
