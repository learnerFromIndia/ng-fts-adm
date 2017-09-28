import {Effect,Actions} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import * as fromAuthActions from './auth.actions';
import * as fromAuth from './auth.reducers';
import {Http} from '@angular/http';
import {Store} from '@ngrx/store';
import {Router} from '@angular/router';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';

@Injectable()
export class AuthEffects{

    @Effect()
    authloginIn = this.actions$.
                   ofType(fromAuthActions.TRY_LOG_IN).map((action : fromAuthActions.tryLogIn) => {
                       return action.payload;
                   }).switchMap((authData : {username:string,password:string}) =>{
                       return this.http.get('http://localhost:8080/fts-services/api/authenticate/'+ authData.username + '/' + authData.password);
                    }).mergeMap((response)=> {
                        let user = response.json();
                        if (user && user.token) {
                            // store user details and jwt token in local storage to keep user logged in between page refreshes
                            this.router.navigate(['/dashboard']); 
                            return [
                                {
                                  type:fromAuthActions.LOGIN,
                                  username:user.username
                                },{
                                  type:fromAuthActions.SET_TOKEN,
                                  token:user.token
                                }
                            ]
                        }
                        
                    }); 
    @Effect({dispatch: false})
     authLogout = this.actions$
                     .ofType(fromAuthActions.LOGOUT)
                      .do(() => {
                        this.router.navigate(['/login']);
                      });
    constructor(public actions$:Actions,public http:Http,public store:Store<fromAuth.State>,public router:Router){}

}