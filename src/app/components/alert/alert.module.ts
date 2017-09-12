import {SharedModule} from '../../shared/shared.module';
import {NgModule} from "@angular/core";
import {AlertComponent} from './alert.component';
@NgModule({
  imports:[SharedModule],
  declarations:[AlertComponent],
  exports:[AlertComponent]
})
export class AlertModule{}

