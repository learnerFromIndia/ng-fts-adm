import {NgModule} from "@angular/core";
import {SharedModule} from "../../shared/shared.module";
import {StatisticsBarComponent,AllocatedVehicleComponent,RouteComponent,AddNewEmployeeComponent,DisplayEmployeeInfoComponent,DashboardComponent,AddNewDriverComponent,CompanyInfoComponent,EmployeeInfoComponent,DisplayDriverInfoComponent,DisplayDriverTripComponent,MapComponent,CabsInfoComponent,AllocationsComponent} from './index';
import { Ng2DragDropModule } from 'ng2-drag-drop';


@NgModule({
  imports:[SharedModule,Ng2DragDropModule.forRoot()],
  declarations:[StatisticsBarComponent,AllocatedVehicleComponent,RouteComponent,DisplayEmployeeInfoComponent,AddNewEmployeeComponent,DashboardComponent,DisplayDriverTripComponent, AddNewDriverComponent,DisplayDriverInfoComponent,CompanyInfoComponent, EmployeeInfoComponent, CabsInfoComponent, AllocationsComponent, MapComponent],
  exports:[ ]
})
export class DashboardModule{}
