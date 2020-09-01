import { BasketService } from './../services/basket.service';
import { Product } from './../models/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[] =
  [
    {pname:"Laptop",pid:1,pimg:"https://i.dunya.com/1/670/377/files/2019/9/27/454303/454303.jpg?v=1569568178",price:50},
    {pname:"Car",pid:2,pimg:"https://i.dunya.com/1/670/377/files/2019/9/27/454303/454303.jpg?v=1569568178",price:1500},
    {pname:"Phone",pid:3,pimg:"https://i.dunya.com/1/670/377/files/2019/9/27/454303/454303.jpg?v=1569568178",price:750}
  ]

  constructor(private basketService:BasketService, private route:ActivatedRoute) { }

  ngOnInit() {
  }
  addToCart(product){
    this.basketService.addProduct(product);
    window.alert('Sepete Eklendi.');
  }

}
