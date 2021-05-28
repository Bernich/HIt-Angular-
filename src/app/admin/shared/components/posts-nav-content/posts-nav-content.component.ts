import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../services';

@Component({
  selector: 'app-posts-nav-content',
  templateUrl: './posts-nav-content.component.html',
  styleUrls: ['./posts-nav-content.component.css']
})
export class PostNavContentComponent implements OnInit {

  constructor(
    private navigationService: NavigationService
  ) { }

  ngOnInit(): void {
  }

  navigateToAddPost() {
    this.navigationService.navigateToCreatePost()
  }

}
