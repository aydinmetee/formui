import { BasketService } from './../services/basket.service';
import { Product } from './../models/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  items=[];

  constructor(private basketService:BasketService) {
    
   }

  ngOnInit() {
    this.items=this.basketService.getProduct();
  }



}
