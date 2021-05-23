import { Component, OnInit } from '@angular/core';
import { IPost, Post } from 'src/app/shared/model/post.model';
import { PostService } from 'src/app/entities/post';
import { HttpResponse, HttpClient } from '@angular/common/http';
import { IPodcast } from 'src/app/shared/model/podcast.model';

@Component({
  selector: 'jhi-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {
  posts: IPost[];
  isLoading: boolean;


  abouts = [
    {
      url: 'https://kumasihive.com/wp-content/uploads/2021/05/Ye.jpg',
      title: "About Us!",
      description: "From 2015, Kumasi Hive has set itself apart as a leader in Technology and innovation in Kumasi and Ghana. This we have achieved through our wide range of training programs. We have run training in Internet of Things, Robotics, Graphic Design, Web Development and have won many awards across the globe. In a bid to increase our reach and create more impact, we present to you Hive Institute of Technology. The Hive Institute of Technology focuses on innovation, emerging technologies and hands on practicality. We are achieving this by imbibing problem solving abilities to our students, setting them apart from the masses.",
    },
    {
      url: 'https://kumasihive.com/wp-content/uploads/2019/09/Innovatee.jpg',
      title: "Accreditors",
      description: "Then again, certificates that are highly recognized by society and international institutions will be provided to the students, preferable from Universities like Kwame Nkrumah University Of Science and Technology, but to mention a few !",
    },
    {
      url: 'https://kumasihive.com/wp-content/uploads/2021/05/DM.jpg',
      title: "Core Values",
      description: "To ensure that people get to have a practical experience and system of learning, the Hive Institute will provide a learning environment where students can enjoy both practical and experimental ways of studying. Also, the Institute will seek to ensure that courses that will be taught will provide value for money while giving students the exposure they need.",
    }
  ]


  headerPosts = [
    {
      image: 'https://hive-institute-of-technology.wm.r.appspot.com/_next/static/images/institute-0ea30831009b5155c09c5baf27cbc655.png',
      title: 'A culture where everyone can thrive',
      description: 'We are focused on creating a vibrant community of belonging that pursues diversity, builds inclusion, and creates more equitable opportunities for learning.'
    },
    {
      image: 'https://hive-institute-of-technology.wm.r.appspot.com/_next/static/images/academics-bg-89794e0b7ef7eb5ffdc9fc9b4adfea66.png',
      title: 'A Hive Institute education is not a narrow path that students follow from Point A to Point Z.',
      description: 'We encourage our students to explore the academic landscape, venturing into unfamiliar fields of knowledge and, perhaps, discovering new passions that will take them in a different direction altogether.'
    },
    {
      image: 'https://hive-institute-of-technology.wm.r.appspot.com/_next/static/images/night-banner-ad3a3fcf3c1ed36f363ddb7c8986f732.png',
      title: 'Preparing students to make meaningful contributions to society as engaged citizens and leaders in a complex world',
      description: 'Rich learning experiences that provide a broad liberal arts foundation and deep subject-area expertise. Unsurpassed opportunities to participate in the advancement of entire fields of knowledge'
    }
  ];

  constructor(private postService: PostService, private http: HttpClient) { }

  ngOnInit() {
  }


}
