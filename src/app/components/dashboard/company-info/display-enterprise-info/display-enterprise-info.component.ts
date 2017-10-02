import { Component, OnInit,Input} from '@angular/core';
import {Enterprise} from '../../../../model/index';
import * as fromApp from '../../../../store/app.reducers';
import * as fromEnterpriseActions from '../store/enterprise.actions';
import {Store} from '@ngrx/store';

@Component({
    selector: 'app-display-enterprise-info',
    template: `<div class="displayForm">
                  <div class="displayHeader clearfix"><button class="btn btn-danger" (click)="onDelete()">Delete</button> <button class="btn btn-warning" (click)="onEditStarted()" >Edit</button></div>
                  <div class="displayContent" >
                      <p>Name: <code>{{enterprise.sbsdryFullName}}</code></p>
                  
                  </div>
                </div>`,
  styles: [`
          .displayContent{
            padding:15px;
            box-shadow: 0px 0px 15px #cdcdcd;
            max-height:60vh;
            overflow:hidden;
        }
        .displayContent p {
            font-size:17px;
            color:#505050;
        }
          code{
            background-color:grey;
            color:white;
        }
        .displayForm{
            width:100%;
        }
        .displayHeader{
            background-color:grey;
            padding:10px;
        }
        .displayHeader h3{
            display: inline;
        }
        .displayHeader button{
            float: right;
            margin-left:5px;
        }
        #viewTodayBut{
            float:left;
        }
  `]
})
export class DisplayEnterpriseInfoComponent implements OnInit {

  @Input()
   enterprise:Enterprise;

  constructor(public store:Store<fromApp.AppState>) { }

  ngOnInit() {
  }

  onDelete(){
    //this.store.dispatch(new fromEnterpriseActions.deleteEmployee());
  }

  onEditStarted(){
    this.displayAddForm();
    //this.store.dispatch(new fromEnterpriseActions.setEditMode(this.enterprise));
}

displayAddForm(){
  this.store.dispatch(new fromEnterpriseActions.displayAddEnterprise);
}

}
