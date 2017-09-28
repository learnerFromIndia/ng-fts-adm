import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {Store} from '@ngrx/store';
import * as fromApp from '../store/app.reducers';
import * as fromAuth from '../components/login/store/auth.reducers';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router,private store: Store<fromApp.AppState>) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        
        return this.store.select('auth').map((authState: fromAuth.State) => {
            console.log(authState.isAuthenticated);
            if(authState.isAuthenticated){
                return true;
            }
            // not logged in so redirect to login page with the return url
                this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
                return false;
            
          });
    }
}