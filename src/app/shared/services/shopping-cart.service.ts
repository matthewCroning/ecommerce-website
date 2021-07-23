import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  
  productsHashMap = new Map<String, any>(); 
  products = [];
  productsSubject = new Subject< Map<String, any>>();
  id = 0;
  totalPrice = 0;
  
  constructor() {
    this.getSessionDataMap();
   }

  addProduct(product){

    this.products.push({product: product, id: this.id++, amount: 1});
    if(this.productsHashMap.get(product.name) == null){
      this.productsHashMap.set(product.name, {product: product, id: this.id++, amount: 1});
    } else {
      this.productsHashMap.set(product.name, {product: product, id: this.id++, amount: this.productsHashMap.get(product.name).amount+1});
    }
    this.productsSubject.next(this.productsHashMap);
    this.setSessionDataMap();
  }

  reduceProduct(productName){
    if(this.productsHashMap.get(productName).amount == 1){
  
    } else {
      this.productsHashMap.set(productName, {product: this.productsHashMap.get(productName).product, id: this.id++, amount : this.productsHashMap.get(productName).amount-1});
    }
    this.productsSubject.next(this.productsHashMap);
    this.setSessionDataMap();
  }

  increaseProduct(productName){
    this.productsHashMap.set(productName, {product: this.productsHashMap.get(productName).product, id: this.id++, amount : this.productsHashMap.get(productName).amount+1});
    this.productsSubject.next(this.productsHashMap);
    this.setSessionDataMap();
  }

  removeProduct(productName){
    this.productsHashMap.delete(productName);
    this.productsSubject.next(this.productsHashMap);
    this.setSessionDataMap();
  }

  getProducts(){
    return this.productsHashMap;
  }

  getCountOfCart(){
    var count = 0;
    for (let [key, value] of this.productsHashMap) {
     count = this.productsHashMap.get(key).amount + count;
    }
    return count;
  }

  changeAmount(){

  }

  getPrice(){
    this.totalPrice = 0;
   
    for (let [key, value] of this.productsHashMap) {
      this.totalPrice = this.productsHashMap.get(key).amount * this.productsHashMap.get(key).product.price + this.totalPrice;
    }

    return this.totalPrice;
  }

  removeByAttr(arr, attr, value){
    var i = arr.length;
    while(i--){
       if( arr[i] 
           && arr[i].hasOwnProperty(attr) 
           && (arguments.length > 2 && arr[i][attr] === value ) ){ 

           arr.splice(i,1);

       }
    }
    return arr;
  }

  setSessionDataMap(){
    localStorage.cart = JSON.stringify(Array.from(this.productsHashMap));
  }

  getSessionDataMap(){
    this.productsHashMap = new Map(JSON.parse(localStorage.cart));
    
  }
}
