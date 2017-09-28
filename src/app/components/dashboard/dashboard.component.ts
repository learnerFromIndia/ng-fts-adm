import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  options = [
    {option:'CompanyDetails',iconPath:'assets/img/company.svg',routerPath:'companyInfo'},
    {option:'EmployeeDetails',iconPath:'assets/img/search.svg',routerPath:'employeesInfo'},
    {option:'CabDetails',iconPath:'assets/img/car-front.svg',routerPath:'cabsInfo'},
    {option:'MapView',iconPath:'assets/img/maps.svg',routerPath:'mapView'},
    {option:'Allocation',iconPath:'assets/img/algorithm.svg',routerPath:'allocations'}
  ]
  constructor() { }

  ngOnInit() {
  }

}
