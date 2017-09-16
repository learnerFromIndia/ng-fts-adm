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
        this.count = Array(this.empList.length).fill(0).map((x,i)=>i);
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

    empList = [
        [{index: 0, name: 'Amit', type: 'employee'},
        {index: 0, name: 'Ajith', type: 'employee'},
        {index: 0, name: 'Bala', type: 'employee'},
        {index: 0, name: 'Raghav', type: 'employee'}],
        [{index: 1, name: 'Tom', type: 'employee'},
        {index: 1, name: 'Jasmeet', type: 'employee'},
        {index: 1, name: 'Dmitry', type: 'employee'}],
        [{index: 2, name: 'PeeJay', type: 'employee'},
        {index: 2, name: 'Chandran', type: 'employee'},
        {index: 2, name: 'Umang', type: 'employee'},
        {index: 2, name: 'Diwakar', type: 'employee'}]];

      dragEnabled = true;
      count: number[];

      onAnyDrop(e: any, i: number) {
        let tmp = e.dragData;
        this.removeItem(e.dragData, this.empList[tmp.index]);
        let emp = {index: i, name: tmp.name, type: 'employee'};
        this.empList[i].push(emp);
      }
    
      removeItem(item: any, list: Array<any>) {
        let index = list.map(function (e) {
          return e.name
        }).indexOf(item.name);
        list.splice(index, 1);
      }
}