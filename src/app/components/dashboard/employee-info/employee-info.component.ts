import { Component, OnInit } from '@angular/core';
import {Employee} from '../../../model/index';

import {Observable} from 'rxjs/Observable';
import * as fromApp from '../../../store/app.reducers';
import * as fromEmployees from './store/employees.reducers';
import * as fromEmplyeessActions from './store/employees.actions';
import {Store} from '@ngrx/store';


@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css']
})
export class EmployeeInfoComponent implements OnInit {

    employeeListObservable:Observable<fromEmployees.State>;
  
    constructor(public store:Store<fromApp.AppState>) { }
    
    ngOnInit() {
    this.employeeListObservable = this.store.select('employees');
  
    }
    onSelect(selectedEmployee:Employee,index:number){
      this.store.dispatch(new fromEmplyeessActions.hideAddForm());
      this.store.dispatch(new fromEmplyeessActions.setSelectedEmployee(selectedEmployee,index));
    }
    
    displayAddForm(){
      this.store.dispatch(new fromEmplyeessActions.displayAddForm());
    }
   


}
