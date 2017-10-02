import {Effect,Actions} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import * as EnterpriseActions from './enterprise.actions';
import * as EnterpriseReducers from './enterprise.reducers';
import {Http} from '@angular/http';
import {Store} from '@ngrx/store';
import {Router} from '@angular/router';
import {Enterprise} from '../../../../model/index';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';

@Injectable()
export class EnterpriseEffects{

    @Effect()
    selected = this.actions$.
    ofType(EnterpriseActions.ADD_ENTERPRISE).map((action : EnterpriseActions.addEnterprise) => {
        return action.enterprise;
    }).switchMap((enterprise : Enterprise) =>{
        return this.http.post('http://localhost:8080/fts-services/api/company/add', enterprise);
     }).mergeMap((response)=> {
        let res = response.json();
        return [
            {
              type:EnterpriseActions.DISPLAY_ADD_ENTERPRISE,
              selected:res
            }
        ]
         
     }); 

     @Effect()
     updated = this.actions$.
     ofType(EnterpriseActions.UPDATE_ENTERPRISE).map((action : EnterpriseActions.updateEnterprise) => {
         return action.enterprise;
     }).switchMap((enterprise : Enterprise) =>{
         return this.http.post('http://localhost:8080/fts-services/api/company/update', enterprise);
      }).mergeMap((response)=> {
         let res = response.json();
         return [
             {
               type:EnterpriseActions.DISPLAY_ADD_ENTERPRISE,
               selected:res
             }
         ]
          
      }); 
    constructor(public actions$:Actions,public http:Http,public store:Store<EnterpriseReducers.State>){}

}