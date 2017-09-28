import { Component, OnInit,Input} from '@angular/core';
import * as fromApp from '../../../../store/app.reducers';
import * as fromAllocActions from '../store/allocations.actions';

import {Store} from '@ngrx/store';

@Component({
  selector: 'app-allocated-vehicle',
  templateUrl: './allocated-vehicle.component.html',
  styleUrls: ['./allocated-vehicle.component.css']
})
export class AllocatedVehicleComponent implements OnInit {
  
  @Input()
  cab:any;
  
  @Input()
  routeId:number;
  
  
  dragEnabled = true;
  
  constructor(public store:Store<fromApp.AppState>) { }
  
  toggle:boolean = true;
  
  ngOnInit(){
    
  }
  
  onAnyDrop() {
    console.log('before');
    this.store.dispatch(new fromAllocActions.dropCompleted(this.cab.cabId));     
  }
  
  onDragStart(commutter,cabId:number){
    this.store.dispatch(new fromAllocActions.updateToBeRemoved({cabId:cabId,commutter:commutter}));
  }  
}
