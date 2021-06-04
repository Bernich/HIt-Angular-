import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IPost, Post } from 'src/app/shared/model/post.model';
import { PostService } from 'src/app/entities/post';

@Component({
  selector: 'jhi-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.css',]
})
export class NewsPageComponent implements OnInit {
  posts: IPost[];
  isLoading: boolean;



  // headerPosts = [
  //   {
  //     image: 'https://www.stanford.edu/wp-content/uploads/2020/09/Academics-landing.jpg',
  //     title: 'A culture where everyone can thrive',
  //     description: 'We are focused on creating a vibrant community of belonging that pursues diversity, builds inclusion, and creates more equitable opportunities for learning.'
  //   },
  //   {
  //     image: 'https://www.stanford.edu/wp-content/uploads/2017/03/hoover-background-lg-1499x552.jpg',
  //     title: 'Hive Institute is shaped and strengthened by our many communities.',
  //     description: 'We encourage our students to explore the academic landscape, venturing into unfamiliar fields of knowledge and, perhaps, discovering new passions that will take them in a different direction altogether.'
  //   },
  //   {
  //     image: 'https://www.stanford.edu/wp-content/uploads/2019/01/fac-staff-hero-landscape-1499x522.jpg',
  //     title: 'People committed to public purpose',
  //     description: 'Rich learning experiences that provide a broad liberal arts foundation and deep subject-area expertise. Unsurpassed opportunities to participate in the advancement of entire fields of knowledge'
  //   }
  // ];



  constructor(private postService: PostService) { }

  ngOnInit() {

    this.loadAll();
  }

  loadAll() {
    this.postService.query().subscribe({
      next: (data: any) => {
        this.posts = data
      },

      error: (err) => { }
    })
  }

}

