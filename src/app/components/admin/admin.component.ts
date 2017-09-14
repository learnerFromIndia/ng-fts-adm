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
    users: User[] = [];
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
        this.userService.getAll().subscribe(users => { this.users = users; });
    }

    empList1 = [
        {name: 'Amit', type: 'employee'},
        {name: 'Ajith', type: 'employee'},
        {name: 'Bala', type: 'employee'},
        {name: 'Raghav', type: 'employee'}];

    empList2 = [
        {name: 'Tom', type: 'employee'},
        {name: 'Jasmeet', type: 'employee'},
        {name: 'Cody', type: 'employee'},
        {name: 'Dmitry', type: 'employee'}];

      dragEnabled = true;
    
      onAnyDrop1(e: any) {
        this.empList2.push(e.dragData);
        this.removeItem(e.dragData, this.empList1);
      }

      onAnyDrop2(e: any) {
        this.empList1.push(e.dragData);
        this.removeItem(e.dragData, this.empList2);
      }
    
      removeItem(item: any, list: Array<any>) {
        let index = list.map(function (e) {
          return e.name
        }).indexOf(item.name);
        list.splice(index, 1);
      }
}