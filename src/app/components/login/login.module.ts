import {NgModule} from "@angular/core";
import {LoginComponent} from "./login.component";
import {SharedModule} from "../../shared/shared.module";
import {LoginRoutingModule} from './login-routing.module';


@NgModule({
  imports:[SharedModule,LoginRoutingModule],
  declarations:[LoginComponent],
  exports:[ ]
})
export class LoginModule{

}

