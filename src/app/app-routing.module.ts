import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MapShowerComponent} from 'src/app/map-shower/map-shower.component'

const routes: Routes = [{
  path :'test',component: MapShowerComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
