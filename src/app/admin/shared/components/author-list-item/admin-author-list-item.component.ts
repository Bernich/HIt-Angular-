import { Component, Input, OnInit } from '@angular/core';
import { Author, IUser } from '../../models';

@Component({
  selector: 'app-admin-author-list-item',
  templateUrl: './admin-author-list-item.component.html',
  styleUrls: ['./admin-author-list-item.component.css']
})
export class AdminAuthorListItemComponent implements OnInit {

  @Input() author: Author;

  constructor() { }


  ngOnInit(): void {

  }

}
