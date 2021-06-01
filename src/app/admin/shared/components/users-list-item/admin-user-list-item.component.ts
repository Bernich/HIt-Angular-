import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUser } from '../../models';

@Component({
  selector: 'app-admin-user-list-item',
  templateUrl: './admin-user-list-item.component.html',
  styleUrls: ['./admin-user-list-item.component.css']
})
export class AdminUserListItemComponent implements OnInit {

  @Output() editUser = new EventEmitter();
  @Input() user: IUser;

  constructor() { }
  

  ngOnInit(): void {

  }

}
