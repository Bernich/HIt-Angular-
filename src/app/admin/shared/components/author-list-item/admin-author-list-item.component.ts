import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Author, IUser } from '../../models';

@Component({
  selector: 'app-admin-author-list-item',
  templateUrl: './admin-author-list-item.component.html',
  styleUrls: ['./admin-author-list-item.component.css']
})
export class AdminAuthorListItemComponent implements OnInit {

  @Input() author: Author;
  @Output() edit = new EventEmitter();
  routePath = '';
  constructor() { }


  ngOnInit(): void {
    this.routePath = 'edit/author/' + this.author.author_id;
  }

}
