import { Component, OnInit } from '@angular/core';

import { User } from '../../model/index';
import { UserService } from '../../services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'admin.component.html',
    styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {
    currentUser: User;
    users: User[][] = [];
    imagePath: string;
    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.imagePath = '/assets/img/';
    }

    ngOnInit() {
        this.loadAllUsers();
    }

    deleteUser(id: number) {
        this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { //alert(users);
             this.users = users; 
             this.count = Array(this.users.length).fill(0).map((x,i)=>i);
        });
    }

      dragEnabled = true;
      count: number[];

      onAnyDrop(e: any, i: number) {
        let tmp = e.dragData;
        let user = {id: 0, index: i, username: tmp.username, password: '', firstName: '', lastName: '', type: 'employee'};
        this.users[i].push(user);
        this.removeItem(e.dragData, this.users[tmp.index]);
      }
    
      removeItem(item: any, list: Array<any>) {
        let index = list.map(function (e) {
          return e.name
        }).indexOf(item.name);
        list.splice(index, 1);
      }
}