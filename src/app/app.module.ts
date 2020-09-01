import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ButtonModule, InputTextModule, MenubarModule, MegaMenuModule, PanelMenuModule, CarouselModule, DataViewModule, ChartModule, CardModule} from "primeng";
import {PasswordModule} from 'primeng/password';
import {CommonModule} from "@angular/common";
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProductComponent } from './product/product.component';
import { ChartComponent } from './chart/chart.component';
import { BasketService } from './services/basket.service';



@NgModule({
  declarations: [				
    AppComponent,
    LoginComponent,
      MenuBarComponent,
      NavBarComponent,
      ProductComponent,
      ChartComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    InputTextModule,
    FormsModule,
    PasswordModule,
    ButtonModule,
    CommonModule,
    MenubarModule,
    MegaMenuModule,
    PanelMenuModule,
    CardModule
  ],
  providers: [BasketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
