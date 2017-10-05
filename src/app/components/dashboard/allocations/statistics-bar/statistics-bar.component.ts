import { Component, OnInit, Input } from '@angular/core';
import { trigger, transition, animate, style, state } from '@angular/animations';

@Component({
  selector: 'app-statistics-bar',
  template: `<div class="statsDivContainer">
                <div class="statsDiv" [@slideInOut]="menuState">
                    <div class="circle circle1">
                      {{totalNoOfCabs}}
                    </div>
                      <p class="info" >Total No Of Cabs</p>
                    <div class="circle circle2">
                            {{noOfEmployeesAllotted}}
                    </div>
                      <p class="info info2">Allotted Employees</p>
                    <div class="circle circle3">
                            {{noOfEmptySeats}}   
                    </div>
                      <p class="info info3">No Of Empty Seats</p>
                    <div class="circle circle4">
                            {{noOfPeopleRemaing}}  
                    </div>
                      <p class="info info4">People Remaining</p>
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
        zIndex: 4
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

  @Input()
  totalNoOfCabs: number;

  @Input()
  noOfEmployeesAllotted: number;

  @Input()
  noOfEmptySeats: number;

  @Input()
  noOfPeopleRemaing: number;

  constructor() { }

  ngOnInit() {
  }

  menuState: string = 'out';

  toggleMenu() {
    // 1-line if statement that toggles the value:
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }

}
