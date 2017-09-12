import {NgModule} from "@angular/core";
import {AdminComponent} from "./admin.component";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  imports:[SharedModule],
  declarations:[AdminComponent],
  exports:[ ]
})
export class AdminModule{}
