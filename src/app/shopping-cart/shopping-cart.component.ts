import { ShoppingCartService } from './../shared/services/shopping-cart.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from '../shared/models/product.model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  productsHashMap = new Map<String, any>(); 
  shoppingCartSub: Subscription;
  cartProducts = [];

  constructor(private ShoppingCartService: ShoppingCartService) {
    ShoppingCartService.productsSubject.subscribe({
      next: (v) => this.productsHashMap = v,
    });

    this.productsHashMap = this.ShoppingCartService.getProducts();
  }

  ngOnInit() {
  }

}
