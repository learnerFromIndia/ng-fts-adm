import {RouterModule,Routes} from '@angular/router'; 
import {NgModule} from '@angular/core';
import {DashboardComponent} from './dashboard.component';

export const routes:Routes = [
    {path:'dashboard',component:DashboardComponent}
  ]


@NgModule({
imports:[RouterModule.forRoot(routes)],
declarations:[],
exports:[RouterModule]
})
export class DashboardRoutingModule{


}
