import { Component, OnInit,OnDestroy } from '@angular/core';
import {Alert,AlertType} from '../../model/alert.model';
import {AlertService} from '../../services/alert.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-alert',
  template: `<div *ngIf="alert" class="{{ cssClass(alert) }} alert-dismissable alertDiv">
                <p>{{alert.message}}</p>
                <button class="btn btn-default" (click)="removeAlert(alert)">Close</button>
                <a class="close" (click)="removeAlert(alert)">&times;</a>
            </div>`,
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit,OnDestroy{

  alert:Alert;
  subscription:Subscription;
  constructor(public alertService:AlertService) {
    this.subscription = this.alertService.getAlertObservable().subscribe(alert => {
      if(!alert){
        this.alert = null;
        return;
      }
      this.alert = alert;
    });
  }
  
  ngOnInit() {
   
  }
  
  removeAlert(alert){
     this.alert = null;
  }
  
  cssClass(alert: Alert) {
        if (!alert) {
            return;
        }
 
        // return css class based on alert type
        switch (alert.type) {
            case AlertType.Success:
                return 'custom-success';
            case AlertType.Error:
                return 'custom-danger';
            case AlertType.Info:
                return 'custom-info';
            case AlertType.Warning:
                return 'custom-warning';
        }
    }
    ngOnDestroy(){
      this.subscription.unsubscribe();
    }
}
