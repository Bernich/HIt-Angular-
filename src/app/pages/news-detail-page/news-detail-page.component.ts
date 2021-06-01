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
      image: 'https://firebasestorage.googleapis.com/v0/b/hive-news-c7f94.appspot.com/o/posts%2Fthumb_5c7531e24e32130004bc6dbe?alt=media&token=6ff2d00f-b7cf-48d8-bd55-6bd8fe2b07f8',
      title: 'A Better World for All: Kumasi Hive Contributes to Achieving the Sustainable Development Goals      ',
      description: 'The popular A.R.T. Travels events will continue as a virtual series this spring, but the theater is making preparations for some upcoming, in-person performances. And it has some pertinent pandemic-era experience under its belt.'
    },
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/hive-news-c7f94.appspot.com/o/posts%2Fthumb_5c891dfd33e64000046db150?alt=media&token=33a585e3-3b8c-4bcd-a08c-4bb843199878',
      title: 'Edukits: Merging 3D Printing and Education',
      description: 'The Bridge the Gap training program is an ongoing initiative that was started by Kumasi Hive in partnership with GIZ (Deutsche Gesellschaft für Internationale Zusammenarbeit), Innovation Factory and eskills for Girls.'

    },
    {
      description: 'Bridge the Gap, an initiative of the Ghana-based company Kumasi Hive, won the Leadership in SMEs category (Leadership II) award at the 2019 EQUALS in Tech Awards at the 2019 Internet Governance Forum in Berlin, Germany',
      title: 'Kumasi Hive Recognised in Berlin for Empowering Female Tech Entrepreneurs',
      image: 'https://firebasestorage.googleapis.com/v0/b/hive-news-c7f94.appspot.com/o/posts%2Fthumb_post_1576937167380?alt=media&token=3a52b8e8-526d-4e9e-a846-74e4c77218bf'

    },
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/hive-news-c7f94.appspot.com/o/posts%2Fthumb_5c7531e24e32130004bc6dbe?alt=media&token=6ff2d00f-b7cf-48d8-bd55-6bd8fe2b07f8',
      title: 'A Better World for All: Kumasi Hive Contributes to Achieving the Sustainable Development Goals      ',
      description: 'The popular A.R.T. Travels events will continue as a virtual series this spring, but the theater is making preparations for some upcoming, in-person performances. And it has some pertinent pandemic-era experience under its belt.'
    },
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/hive-news-c7f94.appspot.com/o/posts%2Fthumb_5c891dfd33e64000046db150?alt=media&token=33a585e3-3b8c-4bcd-a08c-4bb843199878',
      title: 'Edukits: Merging 3D Printing and Education',
      description: 'The Bridge the Gap training program is an ongoing initiative that was started by Kumasi Hive in partnership with GIZ (Deutsche Gesellschaft für Internationale Zusammenarbeit), Innovation Factory and eskills for Girls.'

    },
    {
      description: 'Bridge the Gap, an initiative of the Ghana-based company Kumasi Hive, won the Leadership in SMEs category (Leadership II) award at the 2019 EQUALS in Tech Awards at the 2019 Internet Governance Forum in Berlin, Germany',
      title: 'Kumasi Hive Recognised in Berlin for Empowering Female Tech Entrepreneurs',
      image: 'https://firebasestorage.googleapis.com/v0/b/hive-news-c7f94.appspot.com/o/posts%2Fthumb_post_1576937167380?alt=media&token=3a52b8e8-526d-4e9e-a846-74e4c77218bf'

    },
    {
      description: 'Bridge the Gap, an initiative of the Ghana-based company Kumasi Hive, won the Leadership in SMEs category (Leadership II) award at the 2019 EQUALS in Tech Awards at the 2019 Internet Governance Forum in Berlin, Germany',
      title: 'Kumasi Hive Recognised in Berlin for Empowering Female Tech Entrepreneurs',
      image: 'https://firebasestorage.googleapis.com/v0/b/hive-news-c7f94.appspot.com/o/posts%2Fthumb_post_1576937167380?alt=media&token=3a52b8e8-526d-4e9e-a846-74e4c77218bf'

    },
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/hive-news-c7f94.appspot.com/o/posts%2Fthumb_5c7531e24e32130004bc6dbe?alt=media&token=6ff2d00f-b7cf-48d8-bd55-6bd8fe2b07f8',
      title: 'A Better World for All: Kumasi Hive Contributes to Achieving the Sustainable Development Goals      ',
      description: 'The popular A.R.T. Travels events will continue as a virtual series this spring, but the theater is making preparations for some upcoming, in-person performances. And it has some pertinent pandemic-era experience under its belt.'
    },
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/hive-news-c7f94.appspot.com/o/posts%2Fthumb_5c891dfd33e64000046db150?alt=media&token=33a585e3-3b8c-4bcd-a08c-4bb843199878',
      title: 'Edukits: Merging 3D Printing and Education',
      description: 'The Bridge the Gap training program is an ongoing initiative that was started by Kumasi Hive in partnership with GIZ (Deutsche Gesellschaft für Internationale Zusammenarbeit), Innovation Factory and eskills for Girls.'

    },
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
    {
      image: 'https://www.stanford.edu/wp-content/uploads/2019/01/fac-staff-hero-landscape-1499x522.jpg',
      title: 'People committed to public purpose',
      description: 'Rich learning experiences that provide a broad liberal arts foundation and deep subject-area expertise. Unsurpassed opportunities to participate in the advancement of entire fields of knowledge'
    }
  ];



  constructor(private postService: PostService) { }

  ngOnInit() {
  }


}
