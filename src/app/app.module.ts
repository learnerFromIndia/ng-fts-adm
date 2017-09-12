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
import { AlertService, AuthenticationService, UserService } from './services/index';
import { routing } from './app.routing';
import {AdminModule} from './components/admin/admin.module';

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
    AdminModule
  ],
  providers: [AuthGuard,AuthenticationService,AlertService,UserService],
  bootstrap: [AppComponent]
}) 
export class AppModule { }
