import { Product } from './../models/product.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[];
  productsHashMap = new Map<String, Product>(); 
  
  constructor(private http: HttpClient) { 
    console.log("entered product service")
    this.products = [];
    this.getProductsMySql().subscribe((result: any[]) => {
    this.products = result;
    console.log(this.products);
    this.productsHashMap = result.reduce(function(map, obj) {
        map[obj.name] = obj;
        return map;
    }, {});
    console.log(this.productsHashMap);
    });
  }

  getProducts(){
    console.log("get products run");
    return this.products;
  }

  getProduct(productId){
    return this.http.get('/api/products/getProduct/' + productId);
  }

  getProductVariant(productVariantId){
    console.log(productVariantId);
    return this.http.get('/api/product_variant/getProductVariant/' + productVariantId);
  }

  
  getProductVariantsDistinct(){
    return this.http.get('/api/product_variant/findAllDistinct');
  }

  getProductsMySql(){
    return this.http.get('/api/product_variant/findAllDistinct');
  }

  createProduct(product){
    console.log(product);
    return this.http.post('/api/products/create', {product: product});
  }

  updateProduct(product){
    console.log(product);
    return this.http.post('/api/products/update', {product: product});
  }

  deleteProduct(id){
    return this.http.post('/api/products/delete', {id: id});
  }

  findLike(columnFilter, searchInput){
    return this.http.get('/api/products/findLike/' + searchInput + "/" + columnFilter);
  }

  addTag(id, category){
    return this.http.post('/api/product_category/create', {id: id, category: category});
  }

  

  

}
