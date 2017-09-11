import {NgModule} from "@angular/core";
import {DashboardComponent} from "./dashboard.component";
import {SharedModule} from "../../shared/shared.module";
import {DashboardRoutingModule} from './dashboard-routing.module';

@NgModule({
  imports:[SharedModule,DashboardRoutingModule],
  declarations:[DashboardComponent],
  exports:[ ]
})
export class DashBoardModule{}
