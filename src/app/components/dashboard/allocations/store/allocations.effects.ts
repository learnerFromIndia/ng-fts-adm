import {Effect,Actions} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import * as allocActions from './allocations.actions';
import * as allocReducers from './allocations.reducers';
import {Http} from '@angular/http';
import {Store} from '@ngrx/store';
import {Router} from '@angular/router';
import {Trips} from '../../../../model/index';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';

@Injectable()
export class AllocationsEffects{

    @Effect()
    routes = this.actions$.
    ofType(allocActions.TRY_LOADING_ROUTES).map((action : allocActions.tryLoadingRoutes) => {
        return action.payload;
    }).switchMap((subId : {subsdryId:number}) =>{
        return this.http.get('http://localhost:8080/fts-services/api/routes/'+ subId.subsdryId);
     }).mergeMap((response)=> {
        let calculatedRoutes = response.json();
        this.router.navigate(['/allocations']); 
        return [
            {
              type:allocActions.LOAD_ROUTES,
              routes:calculatedRoutes
            }
        ]
         
     }); 
    constructor(public actions$:Actions,public http:Http,public store:Store<allocReducers.State>,public router:Router){}

}