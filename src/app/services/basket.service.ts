import { Product } from './../models/product';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  basket=[];
  basketUpdated = new EventEmitter<number>();
  cartUpdated = new EventEmitter<any>();

  constructor() { }

  addProduct(product){
    this.basket.push(product);
    localStorage.setItem('products',JSON.stringify(this.basket));
    localStorage.setItem('length',JSON.stringify(this.basket.length));
    this.basketUpdated.emit(this.basket.length);
    
    
  }
  getProduct(){
    var obj=localStorage.getItem('products');
    this.basket=JSON.parse(obj);
    console.log(this.basket);

    return this.basket;
  }
  clearCart(){
    this.basket=[];
    localStorage.clear();
    return this.basket;
  }

}
