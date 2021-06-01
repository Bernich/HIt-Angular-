import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IPost, Post } from 'src/app/shared/model/post.model';
import { PostService } from 'src/app/entities/post';

@Component({
  selector: 'jhi-news-detail-page',
  templateUrl: './news-detail-page.component.html',
  styleUrls: ['./news-detail-page.component.css',]
})
export class NewsDetailPageComponent implements OnInit {
  posts: IPost[];
  isLoading: boolean;



  news = [

    {
      description: 'Bridge the Gap, an initiative of the Ghana-based company Kumasi Hive, won the Leadership in SMEs category (Leadership II) award at the 2019 EQUALS in Tech Awards at the 2019 Internet Governance Forum in Berlin, Germany',
      title: 'Kumasi Hive Recognised in Berlin for Empowering Female Tech Entrepreneurs',
      image: 'https://firebasestorage.googleapis.com/v0/b/hive-news-c7f94.appspot.com/o/posts%2Fthumb_post_1576937167380?alt=media&token=3a52b8e8-526d-4e9e-a846-74e4c77218bf'

    }
  ]

  headerPosts = [
    {
      image: 'https://www.stanford.edu/wp-content/uploads/2020/09/Academics-landing.jpg',
      title: 'A culture where everyone can thrive',
      description: 'We are focused on creating a vibrant community of belonging that pursues diversity, builds inclusion, and creates more equitable opportunities for learning.'
    },
    {
      image: 'https://www.stanford.edu/wp-content/uploads/2017/03/hoover-background-lg-1499x552.jpg',
      title: 'Hive Institute is shaped and strengthened by our many communities.',
      description: 'We encourage our students to explore the academic landscape, venturing into unfamiliar fields of knowledge and, perhaps, discovering new passions that will take them in a different direction altogether.'
    },

  ];



  constructor(private postService: PostService) { }

  ngOnInit() {
  }


}
