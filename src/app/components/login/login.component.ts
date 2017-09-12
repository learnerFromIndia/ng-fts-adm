import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { AlertService, AuthenticationService } from '../../services/index';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  loading = false;
  returnUrl: string;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService) { }

  ngOnInit() {
    this.authenticationService.logout();
    this.returnUrl = '/admin';
  }
  
  checkForAuthentication(){
    this.loading = true;
    this.authenticationService.login(this.model.username, this.model.password)
        .subscribe(
            data => {
                this.loading = false;
                this.alertService.successAlert('Welcome..'+this.model.username);
                this.router.navigate([this.returnUrl]);
            },
            error => {
                this.alertService.failureAlert(error);
                this.loading = false;
            });
    }
}
