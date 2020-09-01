import { ChartComponent } from './chart/chart.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';


const routes: Routes = [
  { path:'product', component:ProductComponent},
  { path:'product/:productId', component:ProductComponent},
  { path:'cart', component:ChartComponent},
  { path:'login', component:LoginComponent},
  { path:'', redirectTo:'/login', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
