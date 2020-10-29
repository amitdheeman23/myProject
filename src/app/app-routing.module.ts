import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuCardComponent } from './menu-card/menu-card.component';

const routes: Routes = [
  {path:'',redirectTo:'menuCard',pathMatch:'full'},
  {path:'menuCard',component:MenuCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
