import {Action} from '@ngrx/store';
import {Enterprise} from '../../../../model/index';

export const ADD_ENTERPRISE = 'ADD_ENTERPRISE';
export const DISPLAY_ADD_ENTERPRISE = "DISPLAY_ADD_ENTERPRISE";
export const UPDATE_ENTERPRISE = "UPDATE_ENTERPRISE";
export const SET_SELECTED_ENTERPRISE = "SET_SELECTED_ENTERPRISE";

export class addEnterprise implements Action{
 readonly type = ADD_ENTERPRISE;
 constructor(public enterprise:Enterprise){}
}

export class displayAddEnterprise implements Action{
    readonly type = DISPLAY_ADD_ENTERPRISE;
}
   
export class updateEnterprise implements Action{
    readonly type = UPDATE_ENTERPRISE;
    constructor(public enterprise:Enterprise){}
}

export class setSelectedEnterprise implements Action{
    readonly type = SET_SELECTED_ENTERPRISE;
    constructor(public selectedEnterprise:Enterprise,public selectedIndex:number){}
}

export type enterpriseActionsBundle = addEnterprise | displayAddEnterprise | updateEnterprise | setSelectedEnterprise;




