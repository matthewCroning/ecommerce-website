import { Product } from './../models/product.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[];
  productsHashMap = new Map<String, Product>(); 
  
  constructor() { 
    this.products = [];
    var newProduct = new Product("shirt", "best shirt", 3);
    this.productsHashMap.set(newProduct.name, newProduct);
    this.products.push(newProduct);
    var newProduct = new Product("hat", "cool hat", 14);
    this.productsHashMap.set(newProduct.name, newProduct);
    this.products.push(newProduct);
    var newProduct = new Product("pants", "tight pants", 6);
    this.productsHashMap.set(newProduct.name, newProduct);
    this.products.push(newProduct);
    var newProduct = new Product("socks", "low scoks", 6);
    this.productsHashMap.set(newProduct.name, newProduct);
    this.products.push(newProduct);
    var newProduct = new Product("jacket", "warm jacket", 6);
    this.productsHashMap.set(newProduct.name, newProduct);
    this.products.push(newProduct);
    var newProduct = new Product("oecebke shirt", "tight", 6);
    this.productsHashMap.set(newProduct.name, newProduct);
    this.products.push(newProduct);
    var newProduct = new Product("shirt", "best shirt", 3);
    this.productsHashMap.set(newProduct.name, newProduct);
    this.products.push(newProduct);
    var newProduct = new Product("hat", "cool hat", 14);
    this.productsHashMap.set(newProduct.name, newProduct);
    this.products.push(newProduct);
    var newProduct = new Product("pants", "tight pants", 6);
    this.productsHashMap.set(newProduct.name, newProduct);
    this.products.push(newProduct);
    var newProduct = new Product("socks", "low scoks", 6);
    this.productsHashMap.set(newProduct.name, newProduct);
    this.products.push(newProduct);
    var newProduct = new Product("jacket", "warm jacket", 6);
    this.productsHashMap.set(newProduct.name, newProduct);
    this.products.push(newProduct);
    var newProduct = new Product("oecebke shirt", "tight", 6);
    this.productsHashMap.set(newProduct.name, newProduct);
    this.products.push(newProduct);
  }

  getProducts(){
    return this.products;
  }

  getProduct(productId){
    console.log(this.productsHashMap.get(productId));
    return this.productsHashMap.get(productId);
  }

}
