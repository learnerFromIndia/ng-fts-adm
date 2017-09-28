import { Component, OnInit,Input} from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import * as fromApp from '../../../../store/app.reducers';
import * as fromEmployees from '../store/employees.reducers';
import * as fromEmployeesActions from '../store/employees.actions';
import {Store} from '@ngrx/store';
import {Employee} from '../../../../model/index';

@Component({
  selector: 'app-add-new-employee',
  templateUrl: './add-new-employee.component.html',
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
export class AddNewEmployeeComponent implements OnInit {
 
  employeeListObservable:Observable<fromEmployees.State>;

  @Input()
  state:Employee;

  addNewForm:FormGroup;

  constructor(public store:Store<fromApp.AppState>) { }
  ngOnInit() {
    this.employeeListObservable = this.store.select('employees');
      this.addNewForm = new FormGroup(
        {name:new FormControl(this.state.name,Validators.required),
         employeeId:new FormControl(this.state.employeeId,Validators.required),
         bloodGroup:new FormControl(this.state.bloodGroup,Validators.required),
         sex:new FormControl(this.state.sex,Validators.required),
         active:new FormControl(this.state.active,Validators.required),
         shift:new FormControl(this.state.shift,Validators.required),
         address:new FormControl(this.state.address ,Validators.required),
         primaryContact:new FormControl(this.state.primaryContact,Validators.required),
         emergencyContact:new FormControl(this.state.emergencyContact)
        });
  }
  onSave(){
          var newEmployee = new Employee(this.addNewForm.get('name').value,this.addNewForm.get('employeeId').value,
          this.addNewForm.get('sex').value,this.addNewForm.get('bloodGroup').value,this.addNewForm.get('address').value,
          this.addNewForm.get('active').value,this.addNewForm.get('shift').value,this.addNewForm.get('primaryContact').value,this.addNewForm.get('emergencyContact').value);
          this.store.dispatch(new fromEmployeesActions.addEmployee(newEmployee));
          this.addNewForm.reset();
      }

  OnaddFormClose(){
    this.store.dispatch(new fromEmployeesActions.hideAddForm());
  }
  edit(){
        var updatedEmployee = new Employee(this.addNewForm.get('name').value,this.addNewForm.get('employeeId').value,
        this.addNewForm.get('sex').value,this.addNewForm.get('bloodGroup').value,this.addNewForm.get('address').value,
        this.addNewForm.get('active').value,this.addNewForm.get('shift').value,this.addNewForm.get('primaryContact').value,this.addNewForm.get('emergencyContact').value);

        this.store.dispatch(new fromEmployeesActions.updateEmployee(updatedEmployee));
        this.addNewForm.reset();
      }
}
