import {NgModule} from "@angular/core";
import {HeaderComponent} from "./header.component";
import {SharedModule} from "../../shared/shared.module";
import {RouterModule} from '@angular/router';

@NgModule({
  imports:[SharedModule,RouterModule],
  declarations:[HeaderComponent],
  exports:[HeaderComponent]
})
export class HeaderModule{}
