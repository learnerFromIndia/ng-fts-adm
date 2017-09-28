import { Component, OnInit,Input} from '@angular/core';
import {Driver} from '../../../../model/index';
import * as fromApp from '../../../../store/app.reducers';
import * as fromCabsActions from '../store/cabs.actions';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-display-driver-info',
  template: `<div class="displayForm">
                <div class="displayHeader clearfix"><button class="btn btn-danger" (click)="onDelete()">Delete</button> <button class="btn btn-warning" (click)="onEditStarted()" >Edit</button></div>
                <div class="displayContent" >
                    <p>Driver Name: <code>{{driver.driverName}}</code></p>
                    <p>Vehicle : <code>{{driver.vehicle}}</code></p>
                    <p>No Of Seaters : <code>{{driver.noOfSeaters}}</code></p>
                    <p>Vehicle Number : <code>{{driver.vehicleNumber}}</code></p>
                    <p>Route Preference(Start and EndPoint): <code>{{driver.routePreference}}</code></p>
                    <p>is Kyc Done :<code>{{driver.kyc}}</code></p>
                    <p>Active : <code>{{driver.active}}</code></p>
                    <p>Contact Number : <code>{{driver.primaryContact}}</code></p>
                    <p>Emergency Contact : <code>{{driver.emergencyContact}}</code></p>
                </div>
              </div>`,
  styles: [`
          .displayContent{
            padding:15px;
            box-shadow: 0px 0px 15px #cdcdcd;
            max-height:60vh;
            overflow:hidden;
        }
        .displayContent p {
            font-size:17px;
            color:#505050;
        }
          code{
            background-color:grey;
            color:white;
        }
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
        #viewTodayBut{
            float:left;
        }
  `]
})
export class DisplayDriverInfoComponent implements OnInit {

  @Input()
  driver:Driver;

  constructor(public store:Store<fromApp.AppState>) { }

  ngOnInit() {
  }

  onDelete(){
    this.store.dispatch(new fromCabsActions.deleteDriver());
  }

  onEditStarted(){
    this.displayAddForm();
    this.store.dispatch(new fromCabsActions.setEditMode(this.driver));
}

displayAddForm(){
  this.store.dispatch(new fromCabsActions.displayAddForm());
}

}
