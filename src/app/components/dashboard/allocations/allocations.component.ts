import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import * as fromAllocations from './store/allocations.reducers';
import * as fromApp from '../../../store/app.reducers';

@Component({
  selector: 'app-allocations',
  templateUrl: './allocations.component.html',
  styleUrls: ['./allocations.component.css']
})
export class AllocationsComponent implements OnInit {
 
 
  allocationObservable:Observable<fromAllocations.State>;
  toggle = false;
  menuState:string = 'out';
  
  constructor(public store:Store<fromApp.AppState>) {}

  ngOnInit() {
   this.allocationObservable = this.store.select('allocations');
  }
  
  
    toggleMenu() {
      // 1-line if statement that toggles the value:
      this.menuState = this.menuState === 'out' ? 'in' : 'out';
    }
}
