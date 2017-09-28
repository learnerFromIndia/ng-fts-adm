import { Component, OnInit,Input} from '@angular/core';
import {Trip} from '../../../../model/index';
@Component({
  selector: 'app-display-driver-trip',
  template:`<div class="panel panel-default">
              <div class="panel-heading">
                <div class="tripHeader1 clearfix" *ngIf="!toggle"><p>Trip {{index+1}}</p> <span class="tripStatus" [ngClass]="getStatusClass(trip.status)">{{trip.status}}</span></div>
                <div class="tripHeader2 clearfix" *ngIf="!toggle"><p >PickUp Time :{{trip.pickupTime}}</p> <button class="btn btn-default" (click)="toggle = !toggle"><i class="glyphicon glyphicon-chevron-down"></i></button></div>
                <div class="tripHeader3 clearfix" *ngIf="toggle" ><p>{{trip.source}} to {{trip.destination}}</p> <span class="tripStatus" [ngClass]="getStatusClass(trip.status)">{{trip.status}}</span> <button class="btn btn-default" (click)="toggle = !toggle"><i class="glyphicon glyphicon-chevron-up"></i></button></div>
              </div>
              <div [collapse]="!toggle" class="panel-body tripDetail">
                <p>Pick Up Time : {{trip.pickupTime}}</p>
                <p>Estimated Drop End Time : {{trip.pickupTime}}</p>
                <p>Commutters : </p>
                <p *ngFor="let c of trip.commutters;let i=index">
                <span *ngIf="trip.source === 'Home' ">Pickup</span> <span *ngIf="trip.source === 'Office'">Drop</span> 
                {{i+1}} : {{c.name}} ({{c.mobileNo}})</p>
                <p>Available Seats : {{trip.availableSeats}}</p>
              </div>
          </div>`,
  styles: [`
               code{
                  background-color:grey;
                  color:white;
                }
                .tripHeader1 p{
                  display: inline;
                 }
                 .tripHeader2{
                     margin-top:5px;
                 }
                 .tripHeader1 span{
                     float:right;
                     border-radius:10px;
                     padding-left:5px;
                     padding-right:5px;
                 }
                 .tripHeader2 button{
                     float:right;
                     border-radius:50%;
                 }
                 .tripHeader2 p{
                     display: inline;
                 }
                 .tripHeader3 p {
                     display: inline;
                 }
                 .tripHeader3 span{
                     border-radius:10px;
                     padding-left:5px;
                     padding-right:5px;
                     margin-left:10%;
                 }
                 .tripHeader3 button{
                     border-radius:50%;
                     float:right;
                 }
                 .inProgress{
                  background-color:rgba(255, 255, 128,0.95);
                 
                  color:black;
                  }
                  .notStarted{
                    background-color:rgba(194,57,52,0.95);  
                   color:white;
                   }
                   .complete{
                    background-color:rgba(39, 174, 96,0.95);
                  
                   color:white;
                   }
                   .tripDetail p {
                    font-size:17px;
                }
          `]
  })
export class DisplayDriverTripComponent implements OnInit {

  toggle:boolean = false;
  @Input()
  index:number;
  @Input()
  trip:Trip;
  constructor() { }

  ngOnInit() {
    console.log(this.trip.source);
  }
  
  getStatusClass(status:string){
    if(status === 'inProgress'){
      return 'inProgress';
    }else if(status === 'Complete'){
      return 'complete';
    }else if(status === 'Not Started'){
      return 'notStarted';
    }
  }
}
