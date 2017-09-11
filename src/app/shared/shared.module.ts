import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from '@angular/router';

@NgModule({
  imports:[],
  declarations:[],
  exports:[CommonModule, FormsModule, ReactiveFormsModule , RouterModule]
})
export class SharedModule{}
