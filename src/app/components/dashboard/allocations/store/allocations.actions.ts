import {Action} from '@ngrx/store';
import { Trips } from '../../../../model/index';
import { Route } from '../../../../model/index';

export const DROP_COMPLETED = 'DROP_COMPLETED';
export const TO_BE_REMOVED  = "TO_BE_REMOVED";
export const LOAD_ROUTES  = "LOAD_ROUTES";
export const TRY_LOADING_ROUTES  = "TRY_LOADING_ROUTES";

export class tryLoadingRoutes implements Action{
    readonly type = TRY_LOADING_ROUTES;
    constructor(public payload:{subsdryId:number}){}
   }
export class loadRoutes implements Action{
    readonly type = LOAD_ROUTES;
    constructor(public trip:Trips, public routes:Route[]){

    }
}

export class updateToBeRemoved implements Action{
 readonly type = TO_BE_REMOVED;
 constructor(public toBeDropped){}
}

export class dropCompleted implements Action{
 readonly type = DROP_COMPLETED;
 constructor(public droppingPlaceId:number){}
}


export type allocationsActionsBundle = loadRoutes | dropCompleted | updateToBeRemoved | tryLoadingRoutes;




