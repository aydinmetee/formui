import { BasketService } from './../services/basket.service';
import { Component, OnInit } from '@angular/core';
import { INT_TYPE } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  basketCount:number;
  constructor(private basketService:BasketService) {
    this.basketService.basketUpdated.subscribe(
      (count:number) => this.basketCount=count
    );
   }

  ngOnInit() {
    var obj=localStorage.getItem('length');
    this.basketCount=Number(JSON.parse(obj));
  }
  removeCart(){
    this.basketService.clearCart();
    window.alert('Sepet temizlendi.');
  }

}
