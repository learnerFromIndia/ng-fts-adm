import {RouterModule,Routes} from '@angular/router'; 
import {NgModule} from '@angular/core';
import {HomeComponent} from './home.component';

export const routes:Routes = [
    {path:'',component:HomeComponent,pathMatch:'full'}
  ]


@NgModule({
imports:[RouterModule.forRoot(routes)],
declarations:[],
exports:[RouterModule]
})
export class HomeRoutingModule{


}
