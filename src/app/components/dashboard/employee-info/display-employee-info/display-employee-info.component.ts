import { Component, OnInit,Input} from '@angular/core';
import {Employee} from '../../../../model/index';
import * as fromApp from '../../../../store/app.reducers';
import * as fromEmployeesActions from '../store/employees.actions';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-display-employee-info',
  template: `<div class="displayForm">
                <div class="displayHeader clearfix"><button class="btn btn-danger" (click)="onDelete()">Delete</button> <button class="btn btn-warning" (click)="onEditStarted()" >Edit</button></div>
                <div class="displayContent" >
                    <p>Name: <code>{{employee.name}}</code></p>
                    <p>Employee Id : <code>{{employee.employeeId}}</code></p>
                    <p>Sex : <code>{{employee.sex}}</code></p>
                    <p>Blood Group : <code>{{employee.bloodGroup}}</code></p>
                    <p>Shift: <code>{{employee.shift}}</code></p>       
                    <p>Active : <code>{{employee.active}}</code></p>
                    <p>Contact Number : <code>{{employee.primaryContact}}</code></p>
                    <p>Emergency Contact : <code>{{employee.emergencyContact}}</code></p>
                    <p>Address : <code>{{employee.address}}</code></p>
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
export class DisplayEmployeeInfoComponent implements OnInit {

  @Input()
   employee:Employee;

  constructor(public store:Store<fromApp.AppState>) { }

  ngOnInit() {
  }

  onDelete(){
    this.store.dispatch(new fromEmployeesActions.deleteEmployee());
  }

  onEditStarted(){
    this.displayAddForm();
    this.store.dispatch(new fromEmployeesActions.setEditMode(this.employee));
}

displayAddForm(){
  this.store.dispatch(new fromEmployeesActions.displayAddForm());
}

}
