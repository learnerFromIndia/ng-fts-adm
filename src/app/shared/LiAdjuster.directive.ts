import {Directive,HostBinding,Input,OnInit} from '@angular/core';

@Directive({
  selector:'[liAdjuster]'
})
export class LiAdjuster implements OnInit{

 @HostBinding('style.width')
 public width:string;


 public noOfItems:number;

 @Input()
 private set liAdjuster(noOfItems:number){
   this.noOfItems = noOfItems;
 }
 

 ngOnInit(){
     var width = (100)/this.noOfItems;
     this.width = width+'%';
  
    switch(this.noOfItems){
     
      case(2):
        this.width = '25%';
      break;
      case(3):
      this.width = '22%';
      break;
      case(4):
      this.width = '15%';
      break;
      case(5):
      this.width = '15%';
      break;
      case(6):
      this.width = '15%';
      break;
      case(7):
      this.width = '14%';
      break;
      default:
      this.width = '25%';
    }
 }
}