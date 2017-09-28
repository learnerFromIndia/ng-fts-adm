import { Component, OnInit } from '@angular/core';
import * as fromApp from '../../store/app.reducers';
import * as fromAuth from '../login/store/auth.reducers';
import * as fromAuthActions from '../login/store/auth.actions';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
  isNavBarCollapsed:boolean = false;
  authState:Observable<fromAuth.State>;
  constructor(public store:Store<fromApp.AppState>) { }

  ngOnInit() {
   this.authState = this.store.select('auth');
  }

  toggleNavBar(){
    this.isNavBarCollapsed = !this.isNavBarCollapsed;
  }
  
  logout(){
    this.store.dispatch(new fromAuthActions.logout());
  }
}
