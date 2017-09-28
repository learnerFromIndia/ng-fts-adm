import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import * as fromApp from '../../../store/app.reducers';
import * as fromCab from './store/cabs.reducers';
import * as fromCabsActions from './store/cabs.actions';
import {Store} from '@ngrx/store';
import {Driver} from '../../../model/index';

@Component({
  selector: 'app-cabs-info',
  templateUrl: './cabs-info.component.html',
  styleUrls: ['./cabs-info.component.css']
})
export class CabsInfoComponent implements OnInit {

  driverListObservable:Observable<fromCab.State>;

  constructor(public store:Store<fromApp.AppState>) { }
  
  ngOnInit() {
  this.driverListObservable = this.store.select('cabs');

  }
  onSelect(selectedDriver:Driver,index:number){
    this.store.dispatch(new fromCabsActions.hideAddForm());
    this.store.dispatch(new fromCabsActions.setSelectedDriver(selectedDriver,index));
  }
  
  displayAddForm(){
    this.store.dispatch(new fromCabsActions.displayAddForm());
  }
}
