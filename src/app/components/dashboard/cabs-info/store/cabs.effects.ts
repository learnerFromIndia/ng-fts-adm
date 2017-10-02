import {Effect,Actions} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import * as CabActions from './cabs.actions';
import * as CabReducers from './cabs.reducers';
import {Http} from '@angular/http';
import {Store} from '@ngrx/store';
import {Router} from '@angular/router';
import {Driver} from '../../../../model/index';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';

@Injectable()
export class CabsEffects{

    @Effect()
    selected = this.actions$.
    ofType(CabActions.ADD_DRIVER).map((action : CabActions.addDriver) => {
        return action.driver;
    }).switchMap((driver : Driver) =>{
        return this.http.post('http://localhost:8080/fts-services/api/cab/add', driver);
     }).mergeMap((response)=> {
        let res = response.json();
        return [
            {
              type:CabActions.DISPLAY_ADD_FORM,
              selected:res
            }
        ]
         
     }); 
    constructor(public actions$:Actions,public http:Http,public store:Store<CabReducers.State>){}

}