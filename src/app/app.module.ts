import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SharedModule} from './shared/shared.module';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {HeaderModule} from "./components/header/header.module";
import {HomeModule} from "./components/home/home.module";
import {LoginModule} from './components/login/login.module';
import {CoreModule} from './core/core.module';
import { DashBoardModule } from './components/dashboard/dashboard.module';
import {AppRoutingModule} from './app-routing.module';
import {AuthService} from './services/auth.service';
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
    DashBoardModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
}) 
export class AppModule { }
