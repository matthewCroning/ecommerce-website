import { ShoppingCartService } from './../../shared/services/shopping-cart.service';
import { Product } from './../../shared/models/product.model';
import { ProductService } from './../../shared/services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[];
  constructor(private ProductService: ProductService, private ShoppingCartService: ShoppingCartService) { 
    
    this.ProductService. getProductVariantsDistinct().subscribe((result: any[]) => {
      this.products = result;
      console.log(this.products);
      });

  }

  addProduct(product){
    this.ShoppingCartService.addProduct(product);
  }

  ngOnInit() {
  }

}
