import { Component, OnInit } from '@angular/core';
import {Enterprise} from '../../../model/index';

import {Observable} from 'rxjs/Observable';
import * as fromApp from '../../../store/app.reducers';
import * as fromEnterprise from './store/enterprise.reducers';
import * as fromEnterpriseActions from './store/enterprise.actions';
import {Store} from '@ngrx/store';


@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.css']
})
export class CompanyInfoComponent implements OnInit {

  enterpriseListObservable:Observable<fromEnterprise.State>;

  constructor(public store:Store<fromApp.AppState>) { }

  ngOnInit() {
    this.enterpriseListObservable = this.store.select('enterprises');
  }
  
  displayAddForm(){
    this.store.dispatch(new fromEnterpriseActions.displayAddEnterprise);
  }
 

}
