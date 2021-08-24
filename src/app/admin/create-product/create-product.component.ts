import { Product } from '../../shared/models/product.model';
import { ProductService } from '../../shared/services/product.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  
  product: Product;
  
  constructor(private ProductService: ProductService) { 
    this.product = new Product("", 4,"");
  }

  ngOnInit() {
  }

  createProduct(){
    this.ProductService.createProduct(this.product).subscribe(result => {
      console.log(result);
    });
  }
}
