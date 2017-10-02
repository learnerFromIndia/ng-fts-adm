import {Effect,Actions} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import * as EmployeeActions from './employees.actions';
import * as EmployeeReducers from './employees.reducers';
import {Http} from '@angular/http';
import {Store} from '@ngrx/store';
import {Router} from '@angular/router';
import {Employee} from '../../../../model/index';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';

@Injectable()
export class EmployeeEffects{

    @Effect()
    selected = this.actions$.
    ofType(EmployeeActions.ADD_EMPLOYEE).map((action : EmployeeActions.addEmployee) => {
        return action.employee;
    }).switchMap((employee : Employee) =>{
        return this.http.post('http://localhost:8080/fts-services/api/user/add', employee);
     }).mergeMap((response)=> {
        let res = response.json();
        return [
            {
              type:EmployeeActions.DISPLAY_ADD_FORM,
              selected:res
            }
        ]
         
     }); 
    constructor(public actions$:Actions,public http:Http,public store:Store<EmployeeReducers.State>,public employee:Employee){}

}