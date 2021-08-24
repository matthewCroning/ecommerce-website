import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';
import { ProductService } from '../../shared/services/product.service';
@Component({
  selector: 'app-update-products',
  templateUrl: './update-products.component.html',
  styleUrls: ['./update-products.component.scss']
})
export class UpdateProductsComponent implements OnInit {

  product = new Product("",0,"");
  products: Product[];
  searchText;
  searchFilterMap : Map<String, String> = new Map<String, String>();

  constructor(private ProductService: ProductService) { 
    this.ProductService.getProductsMySql().subscribe((result: any[]) => {
      this.products = result;
      console.log(this.products);
      // this.productsHashMap = result.reduce(function(map, obj) {
      //     map[obj.name] = obj;
      //     return map;
      // }, {});
      });
    this.products = ProductService.getProducts();
  }

  ngOnInit(){

  }

  updateProduct(product){
    console.log(product);
    this.ProductService.updateProduct(product).subscribe(result => {
      console.log(result);
    });
  }

  deleteProduct(id){
    this.ProductService.deleteProduct(id).subscribe(result => {
      console.log(result);
    });
  }

  checkCheckBoxvalue(event){
    if(this.searchFilterMap.has(event.target.id)){
      this.searchFilterMap.delete(event.target.id);
    } else {
      this.searchFilterMap.set(event.target.id, "true");
    }
  }

  search(searchInput){
    let columnFilterText = "";
    for (let key of this.searchFilterMap.keys()) {
      columnFilterText = columnFilterText + key + ",";  
    }
    if(columnFilterText != ""){
      columnFilterText = columnFilterText.slice(0, -1);
    }
    
    this.ProductService.findLike(columnFilterText, searchInput).subscribe((result: any[]) => {
      this.products = result;
      console.log(result);
    });

  }

}
