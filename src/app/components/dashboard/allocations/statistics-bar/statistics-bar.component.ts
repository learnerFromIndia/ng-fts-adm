import { Component, OnInit } from '@angular/core';
import {trigger,transition,animate,style,state} from '@angular/animations';

@Component({
  selector: 'app-statistics-bar',
  template: `<div class="statsDivContainer">
                <div class="statsDiv" [@slideInOut]="menuState">
                    <div class="circle circle1">
                      52
                    </div>
                      <p class="info" >No Of Cabs Available</p>
                    <div class="circle circle2">
                            250
                    </div>
                      <p class="info info2">No Of Seats Available</p>
                    <div class="circle circle3">
                            200   
                    </div>
                      <p class="info info3">No Of People Availed</p>
                    <div class="circle circle4">
                            50  
                    </div>
                      <p class="info info4">Shortage of seats</p>
                </div>
                <div class="statsButtonDiv" (click)="toggleMenu()">
                     <span>Statistics</span>
                </div>
            </div>`,
  styleUrls: ['./statistics-bar.component.css'],
   animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)',
        zIndex:4
      })),
      state('out', style({
        transform: 'translate3d(0, -100%, 0)',
        zIndex: -1
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]), 
  ]
})
export class StatisticsBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
   menuState:string = 'out';
  
    toggleMenu() {
      // 1-line if statement that toggles the value:
      this.menuState = this.menuState === 'out' ? 'in' : 'out';
    }

}
