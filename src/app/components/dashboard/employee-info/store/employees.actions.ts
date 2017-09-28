import {Action} from '@ngrx/store';
import {Employee} from '../../../../model/index';

export const ADD_EMPLOYEE = 'ADD_EMPLOYEE';
export const DISPLAY_ADD_FORM = "DISPLAY_ADD_FORM";
export const HIDE_ADD_FORM = "HIDE_ADD_FORM";
export const SET_SELECTED_EMPLOYEE = "SET_SELECTED_EMPLOYEE";
export const SET_EDIT_MODE = "SET_EDIT_MODE";
export const UPDATE_EMPLOYEE = "UPDATE_EMPLOYEE";
export const DELETE_EMPLOYEE = "DELETE_EMPLOYEE";

export class addEmployee implements Action{
 readonly type = ADD_EMPLOYEE;
 constructor(public employee:Employee){}
}

export class displayAddForm implements Action{
    readonly type = DISPLAY_ADD_FORM;
}

export class hideAddForm implements Action{
    readonly type = HIDE_ADD_FORM;
}

export class setSelectedEmployee implements Action{
    readonly type = SET_SELECTED_EMPLOYEE;
    constructor(public selectedEmployee:Employee,public selectedIndex:number){}
}

export class updateEmployee implements Action{
    readonly type = UPDATE_EMPLOYEE;
    constructor(public employee:Employee){}
}

export class setEditMode implements Action{
    readonly type = SET_EDIT_MODE;
    constructor(public selectedEmployee:Employee){}
}

export class deleteEmployee implements Action{
    readonly type = DELETE_EMPLOYEE;
}

export type employeesActionsBundle = addEmployee | displayAddForm | hideAddForm | setSelectedEmployee | setEditMode | updateEmployee | deleteEmployee;




