import {RouterModule,Routes} from '@angular/router'; 
import {NgModule} from '@angular/core';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import { AdminComponent } from './components/admin/index';
import { AuthGuard } from './guards/index';
import * as dashboardFiles from './components/dashboard/index';


const appRoutes: Routes = [
    { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    {path:'dashboard',component:dashboardFiles.DashboardComponent,canActivate: [AuthGuard],
    children:[
        {path:'',redirectTo:'cabsInfo',pathMatch:'full'},
        {path:'companyInfo',component:dashboardFiles.CompanyInfoComponent},
        {path:'employeesInfo',component:dashboardFiles.EmployeeInfoComponent},
        {path:'cabsInfo',component:dashboardFiles.CabsInfoComponent},
        {path:'mapView',component:dashboardFiles.MapComponent},
        {path:'allocations',component:dashboardFiles.AllocationsComponent}
    ]},
    { path: '**', redirectTo: '' }
    
];

export const routing = RouterModule.forRoot(appRoutes);