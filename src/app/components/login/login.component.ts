import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { AlertService} from '../../services/index';
import * as fromAuth from './store/auth.reducers';
import * as fromAuthActions from './store/auth.actions';
import {Store} from '@ngrx/store';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  loading = false;
  returnUrl: string;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService ,private store:Store<fromAuth.State>) { }

  ngOnInit() {
    this.store.dispatch(new fromAuthActions.logout());
    this.returnUrl = '/admin';
  }
  
  checkForAuthentication(){
    this.loading = true;
    this.store.dispatch(new fromAuthActions.tryLogIn({username:this.model.username,password:this.model.password}));
  }
}
