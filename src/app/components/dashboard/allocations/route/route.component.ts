import { Component, OnInit,Input} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromAllocActions from '.././store/allocations.actions';
import * as fromAllocations from '.././store/allocations.reducers';
import * as fromApp from '../../../../store/app.reducers';
import { Route } from '../../../../model/index';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.css']
})
export class RouteComponent implements OnInit {
  
  @Input()
  route : Route[];
  toggle = true;  

  constructor(public store:Store<fromApp.AppState>) { }

  ngOnInit() {
  
  }

}
