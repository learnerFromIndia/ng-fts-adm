import {RouterModule,Routes} from '@angular/router'; 
import {NgModule} from '@angular/core';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import { AdminComponent } from './components/admin/index';
import { AuthGuard } from './guards/index';

const appRoutes: Routes = [
    { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);