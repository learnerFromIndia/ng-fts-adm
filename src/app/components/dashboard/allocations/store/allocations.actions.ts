import {Action} from '@ngrx/store';


export const DROP_COMPLETED = 'DROP_COMPLETED';
export const TO_BE_REMOVED  = "TO_BE_REMOVED";


export class updateToBeRemoved implements Action{
 readonly type = TO_BE_REMOVED;
 constructor(public toBeDropped){}
}

export class dropCompleted implements Action{
 readonly type = DROP_COMPLETED;
 constructor(public droppingPlaceId:number){}
}


export type allocationsActionsBundle = dropCompleted | updateToBeRemoved;




