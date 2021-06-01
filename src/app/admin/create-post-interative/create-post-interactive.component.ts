import { Component, Input, OnInit, HostListener, Renderer2, Inject } from '@angular/core';
import { IPost, Post } from '../../shared/model/post.model';
import { CreatePostService } from '../shared/services';


@Component({
  selector: 'app-hivenews-create-post-interactive',
  templateUrl: './create-post-interactive.component.html',
  styleUrls: ['./create-post-interactive.component.css'],
  providers: [CreatePostService]
})
export class InteractiveCreatePostComponent implements OnInit {
  @Input() posts: IPost[];





  constructor(public postService: CreatePostService) {
    // console.log(this.postService.post)
  }

  ngOnInit() {

  }





  @HostListener('window:resize', ['$event'])
  onResize(event) {

  }
}
