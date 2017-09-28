import { Component, OnInit,Input} from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import * as fromApp from '../../../../store/app.reducers';
import * as fromCabs from '../store/cabs.reducers';
import * as fromCabActions from '../store/cabs.actions';
import {Store} from '@ngrx/store';
import {Driver} from '../../../../model/index';

@Component({
  selector: 'app-add-new-driver',
  templateUrl: './add-new-driver.component.html',
  styles: [`
            .displayForm{
                width:100%;
            }
            .displayHeader{
                background-color:grey;
                padding:10px;
            }
            .displayHeader h3{
                display: inline;
            }
            .displayHeader button{
                float: right;
                margin-left:5px;
            }
            .required{
                color:red;
                font-size:17px;
              }
              .displayContent{
                padding:15px;
                box-shadow: 0px 0px 15px #cdcdcd;
                max-height:60vh;
                overflow:hidden;
            } `
          ]
})
export class AddNewDriverComponent implements OnInit {
 
  driverListObservable:Observable<fromCabs.State>;

  @Input()
  state:Driver;

  addNewForm:FormGroup;

  constructor(public store:Store<fromApp.AppState>) { }
  ngOnInit() {
    this.driverListObservable = this.store.select('cabs');
      this.addNewForm = new FormGroup(
        {driverName:new FormControl(this.state.driverName,Validators.required),
         vehicle:new FormControl(this.state.vehicle,Validators.required),
         noOfSeater:new FormControl(this.state.noOfSeaters,Validators.required),
         vehicleNum:new FormControl(this.state.vehicleNumber,Validators.required),
         kyc:new FormControl(this.state.kyc,Validators.required),
         active:new FormControl(this.state.active,Validators.required),
         primaryContact:new FormControl(this.state.primaryContact,Validators.required),
         emergencyContact:new FormControl(this.state.emergencyContact),
         routePreference:new FormControl(this.state.routePreference)
        });
  }
  onSave(){
          var newDriver = new Driver(this.addNewForm.get('driverName').value,this.addNewForm.get('vehicle').value,
          this.addNewForm.get('noOfSeater').value,this.addNewForm.get('vehicleNum').value,this.addNewForm.get('kyc').value,
          this.addNewForm.get('active').value,this.addNewForm.get('primaryContact').value,this.addNewForm.get('emergencyContact').value,this.addNewForm.get('routePreference').value,this.state.trips);
          this.store.dispatch(new fromCabActions.addDriver(newDriver));
          this.addNewForm.reset();
      }

  OnaddFormClose(){
    this.store.dispatch(new fromCabActions.hideAddForm());
  }
  edit(){
    
        var updatedDriver = new Driver(this.addNewForm.get('driverName').value,this.addNewForm.get('vehicle').value,
        this.addNewForm.get('noOfSeater').value,this.addNewForm.get('vehicleNum').value,this.addNewForm.get('kyc').value,
        this.addNewForm.get('active').value,this.addNewForm.get('primaryContact').value,this.addNewForm.get('emergencyContact').value,this.addNewForm.get('routePreference').value,this.state.trips);
    
        this.store.dispatch(new fromCabActions.updateDriver(updatedDriver));
        this.store.dispatch(new fromCabActions.hideAddForm());
        this.addNewForm.reset();
      }
}
