import {Action} from '@ngrx/store';
import {Driver} from '../../../../model/index';

export const ADD_DRIVER = 'ADD_DRIVER';
export const DISPLAY_ADD_FORM = "DISPLAY_ADD_FORM";
export const HIDE_ADD_FORM = "HIDE_ADD_FORM";
export const SET_SELECTED_DRIVER = "SET_SELECTED_DRIVER";
export const SET_EDIT_MODE = "SET_EDIT_MODE";
export const UPDATE_DRIVER = "UPDATE_DRIVER";
export const DELETE_DRIVER = "DELETE_DRIVER";

export class addDriver implements Action{
 readonly type = ADD_DRIVER;
 constructor(public driver:Driver){}
}

export class displayAddForm implements Action{
    readonly type = DISPLAY_ADD_FORM;
}

export class hideAddForm implements Action{
    readonly type = HIDE_ADD_FORM;
}

export class setSelectedDriver implements Action{
    readonly type = SET_SELECTED_DRIVER;
    constructor(public selectedDriver:Driver,public selectedIndex:number){}
}

export class updateDriver implements Action{
    readonly type = UPDATE_DRIVER;
    constructor(public driver:Driver){}
}

export class setEditMode implements Action{
    readonly type = SET_EDIT_MODE;
    constructor(public selectedDriver:Driver){}
}

export class deleteDriver implements Action{
    readonly type = DELETE_DRIVER;
}

export type cabsActionsBundle = addDriver | displayAddForm | hideAddForm | setSelectedDriver | setEditMode | updateDriver | deleteDriver;




