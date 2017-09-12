import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs';
import {Router,NavigationStart} from '@angular/router';
import {Alert,AlertType} from '../model/alert.model';

@Injectable()
export class AlertService{
    
    alertSubject:Subject<Alert> = new Subject<Alert>();
    private keepAfterRouteChange = false;
    
    constructor(public router:Router){
        router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                if (this.keepAfterRouteChange) {
                    // only keep for a single route change
                    this.keepAfterRouteChange = false;
                } else {
                    // clear alert messages
                    this.clear();
                }
            }
        });
    }
    
    getAlertObservable(){
        return this.alertSubject.asObservable();
    }
    
    successAlert(message:string,keepAfterRouteChange = false){
        this.pushAlertToSubject(message,AlertType.Success,keepAfterRouteChange);
    }
    failureAlert(message:string,keepAfterRouteChange = false){
        this.pushAlertToSubject(message,AlertType.Error,keepAfterRouteChange);
    }
    infoAlert(message:string,keepAfterRouteChange = false){
        this.pushAlertToSubject(message,AlertType.Info,keepAfterRouteChange);
    }
    warningAlert(message:string,keepAfterRouteChange = false){
        this.pushAlertToSubject(message,AlertType.Warning,keepAfterRouteChange);
    }
    
    pushAlertToSubject(message:string,type:AlertType,keepAfterRouteChange:boolean){
         this.keepAfterRouteChange = keepAfterRouteChange;
        this.alertSubject.next(<Alert>{type:type,message:message});
    }
    
    clear(){
        this.alertSubject.next();
    }
    
}