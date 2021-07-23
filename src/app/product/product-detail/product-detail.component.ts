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
  
  constructor(public route: ActivatedRoute, private ProductService: ProductService, private ShoppingCartService: ShoppingCartService) {
    
    this.route.params.subscribe(params => {
      this.product = this.ProductService.getProduct(params['id']);
      console.log(this.product);
    });
  }

  ngOnInit() {
  
  }

  
}
