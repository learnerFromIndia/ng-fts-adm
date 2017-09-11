import {RouterModule,Routes} from '@angular/router'; 
import {NgModule} from '@angular/core';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';

export const routes:Routes = [
    {path:'',pathMatch:'full',redirectTo:'home'},
    {path:'home',loadChildren:'app/components/home/home.module#HomeModule'},
    {path:'login',loadChildren:'app/components/login/login.module#LoginModule'},
    {path:'dashboard',loadChildren:'app/components/dashboard/dashboard.module#DashboardModule'}
  ]


@NgModule({
imports:[RouterModule.forRoot(routes)],
declarations:[],
exports:[RouterModule]
})
export class AppRoutingModule{


}
