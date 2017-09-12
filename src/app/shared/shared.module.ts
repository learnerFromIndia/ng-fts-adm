import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LoadingModule, ANIMATION_TYPES } from 'ngx-loading';

@NgModule({
  imports:[
    LoadingModule.forRoot({
        animationType: ANIMATION_TYPES.threeBounce,
        backdropBackgroundColour: 'transparent', 
        backdropBorderRadius: '4px',
        primaryColour: '#27ae60', 
        secondaryColour: '#27ae60', 
        tertiaryColour: '#27ae60'
    })
    ],
  declarations:[],
  exports:[CommonModule, FormsModule, ReactiveFormsModule , RouterModule, BrowserAnimationsModule,LoadingModule]
})
export class SharedModule{}
