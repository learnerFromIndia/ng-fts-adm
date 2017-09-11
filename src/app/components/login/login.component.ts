import { Component, OnInit } from '@angular/core';
import {FormGroup,Validators,FormControl} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authService:AuthService,public router:Router) { }

  loginForm:FormGroup;
  ngOnInit() {
   this.loginForm = new FormGroup({'email':new FormControl(null,Validators.required),'password':new FormControl(null,Validators.required)});
  }
  
  checkForAuthentication(){
    console.log('here...');
     var res =this.authService.checkForAuthentication(this.loginForm.get('email').value,this.loginForm.get('password').value);
     if(res){
         //this.router.navigate('',relative);
     }else{
          //display error
     }
    }


}
