import {Action} from '@ngrx/store';
import { Route } from '../../../../model/index';

export const DROP_COMPLETED = 'DROP_COMPLETED';
export const TO_BE_REMOVED  = "TO_BE_REMOVED";
export const LOAD_ROUTES  = "LOAD_ROUTES";

export class loadRoutes implements Action{
    readonly type = LOAD_ROUTES;
    constructor(public routes:Route[], public payload:{subsdryId:number}){}
}

export class updateToBeRemoved implements Action{
 readonly type = TO_BE_REMOVED;
 constructor(public toBeDropped){}
}

export class dropCompleted implements Action{
 readonly type = DROP_COMPLETED;
 constructor(public droppingPlaceId:number){}
}


export type allocationsActionsBundle = loadRoutes | dropCompleted | updateToBeRemoved;




