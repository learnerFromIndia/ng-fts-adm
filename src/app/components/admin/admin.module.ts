import {NgModule} from "@angular/core";
import {AdminComponent} from "./admin.component";
import {SharedModule} from "../../shared/shared.module";
import { Ng2DragDropModule } from 'ng2-drag-drop';

@NgModule({
  imports:[SharedModule,Ng2DragDropModule.forRoot()],
  declarations:[AdminComponent],
  exports:[ ]
})
export class AdminModule{}
