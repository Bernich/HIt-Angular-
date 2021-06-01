import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../services';

@Component({
  selector: 'app-authors-nav-content',
  templateUrl: './authors-nav-content.component.html',
  styleUrls: ['./authors-nav-content.component.css']
})
export class AuthorsNavContentComponent implements OnInit {

  constructor(
    private navigationService: NavigationService
  ) { }

  ngOnInit(): void {
  }

  navigateToAdd() {
    this.navigationService.addAuthor();
  }

}
