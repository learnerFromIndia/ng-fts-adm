import {RouterModule,Routes} from '@angular/router'; 
import {NgModule} from '@angular/core';
import {LoginComponent} from './login.component';

export const routes:Routes = [
    {path:'login',component:LoginComponent,pathMatch:'full'}
  ]


@NgModule({
imports:[RouterModule.forRoot(routes)],
declarations:[],
exports:[RouterModule]
})
export class LoginRoutingModule{


}
