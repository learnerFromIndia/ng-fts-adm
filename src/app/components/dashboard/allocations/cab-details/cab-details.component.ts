import { Component, OnInit,Input} from '@angular/core';
import * as fromApp from '../../../../store/app.reducers';
import * as fromAllocActions from '../store/allocations.actions';
import { CabStats } from '../../../../model/index';

import {Store} from '@ngrx/store';

@Component({
  selector: 'cab-details',
  templateUrl: './cab-details.component.html',
  styleUrls: ['./cab-details.component.css']
})
export class CabDetailsComponent implements OnInit {
  
  @Input()
  cabDetail:CabStats[];
  
  constructor(public store:Store<fromApp.AppState>) {
      
   }
  
  ngOnInit(){
    
  }
 
}
