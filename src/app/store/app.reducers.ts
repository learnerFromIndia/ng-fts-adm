import * as AuthReducers from '../components/login/store/auth.reducers'; 
import * as cabsReducers from '../components/dashboard/cabs-info/store/cabs.reducers';
import * as employeessReducers from '../components/dashboard/employee-info/store/employees.reducers'; 
import * as allocationsReducers from '../components/dashboard/allocations/store/allocations.reducers'; 
import * as enterprisesReducers from '../components/dashboard/company-info/store/enterprise.reducers';

import {ActionReducerMap} from '@ngrx/store';

export interface AppState{
   auth:AuthReducers.State;
   cabs:cabsReducers.State;
   employees:employeessReducers.State;
   allocations:allocationsReducers.State;
   enterprises:enterprisesReducers.State;
}

export const reducers:ActionReducerMap<AppState> = {
    auth:AuthReducers.authReducer,
    cabs:cabsReducers.cabsReducer,
    employees:employeessReducers.employeesReducer,
    allocations:allocationsReducers.allocationsReducer,
    enterprises:enterprisesReducers.enterpriseReducer
}