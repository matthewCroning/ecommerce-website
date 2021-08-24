import { Product } from 'src/app/shared/models/product.model';
import { ProductService } from './../../shared/services/product.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-variant-detail',
  templateUrl: './product-variant-detail.component.html',
  styleUrls: ['./product-variant-detail.component.scss']
})
export class ProductVariantDetailComponent implements OnInit {

  @Input() productVariantId;
  productVariant;
  constructor(private ProductService: ProductService) { 
   
  }

  ngOnInit() {
    this.ProductService.getProductVariant(this.productVariantId).subscribe((result) => {
      this.productVariant = result;
    });
  }

}
