import { Component, OnInit,Input} from '@angular/core';


@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.css']
})
export class RouteComponent implements OnInit {
  
  
  @Input()
  route:any;
  
  
  toggle = true;  


  constructor() { }

  ngOnInit() {
    
  }

}
