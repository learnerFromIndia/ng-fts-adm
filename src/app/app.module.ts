import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SharedModule} from './shared/shared.module';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {HeaderModule} from "./components/header/header.module";
import {HomeModule} from "./components/home/home.module";
import {LoginModule} from './components/login/login.module';
import {CoreModule} from './core/core.module';
import {AlertModule} from './components/alert/alert.module';
import { AuthGuard } from './guards/index'; 
import { AlertService, UserService } from './services/index';
import { routing } from './app.routing';
import {AdminModule} from './components/admin/admin.module';
import {DashboardModule} from './components/dashboard/dashboard.module';
import {StoreModule,ActionReducer,ActionReducerMap} from '@ngrx/store';
import {reducers} from './store/app.reducers';
import { localStorageSync } from 'ngrx-store-localstorage';
import {EffectsModule} from '@ngrx/effects';
import {AuthEffects} from './components/login/store/auth.effects';
import {AllocationsEffects} from './components/dashboard/allocations/store/allocations.effects';
import {CabsEffects} from './components/dashboard/cabs-info/store/cabs.effects';
import {EmployeeEffects} from './components/dashboard/employee-info/store/employees.effects';

export function localStorageSyncReducer(reducer: ActionReducer<any>) {
  return localStorageSync({keys: ['auth']})(reducer);
}
const metaReducers: Array<ActionReducerMap<any, any>> = [localStorageSyncReducer];
 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HttpModule,
    HeaderModule,
    HomeModule,
    LoginModule,
    CoreModule,
    AlertModule,
    routing,
    AdminModule,
    DashboardModule,
    StoreModule.forRoot(reducers,{metaReducers}),
    EffectsModule.forRoot([AuthEffects,AllocationsEffects,CabsEffects,EmployeeEffects])
  ],
  providers: [AuthGuard,AlertService,UserService],
  bootstrap: [AppComponent]
}) 
export class AppModule { 


}
