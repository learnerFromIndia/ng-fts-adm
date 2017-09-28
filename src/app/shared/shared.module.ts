import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LoadingModule, ANIMATION_TYPES } from 'ngx-loading';
import {PopoverModule} from 'ngx-popover';
import {Collapse} from './collapse.directive';
import {LiAdjuster} from './LiAdjuster.directive';


@NgModule({
  imports:[
    LoadingModule.forRoot({
        animationType: ANIMATION_TYPES.threeBounce,
        backdropBackgroundColour: 'transparent', 
        backdropBorderRadius: '4px',
        primaryColour: '#808080', 
        secondaryColour: '#808080', 
        tertiaryColour: '#808080'
    })
    ],
  declarations:[Collapse,LiAdjuster],
  exports:[CommonModule,LiAdjuster, FormsModule, Collapse,ReactiveFormsModule , RouterModule, BrowserAnimationsModule,LoadingModule,PopoverModule]
})
export class SharedModule{}
