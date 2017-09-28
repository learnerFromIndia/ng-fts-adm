import {Action} from '@ngrx/store';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SET_TOKEN = 'SET_TOKEN';
export const TRY_LOG_IN = 'TRY_LOG_IN';

export class login implements Action{
 readonly type = LOGIN;
 constructor(public username:string){}
}

export class logout implements Action{
    readonly type = LOGOUT;
}

export class tryLogIn implements Action{
    readonly type = TRY_LOG_IN;
    constructor(public payload:{username:string,password:string}){}
}
export class setToken implements Action{
    readonly type = SET_TOKEN;

    constructor(public token:string){}
}

export type AuthActionsBundle = login | logout | setToken | tryLogIn;




