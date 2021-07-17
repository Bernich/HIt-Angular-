import { Component, OnInit } from '@angular/core';
import { IPost, Post } from 'src/app/shared/model/post.model';
import { PostService } from 'src/app/entities/post';
import { HttpResponse, HttpClient } from '@angular/common/http';
import { IPodcast } from 'src/app/shared/model/podcast.model';

@Component({
  selector: 'jhi-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css'],
})
export class AboutPageComponent implements OnInit {
  posts: IPost[];
  isLoading: boolean;

  about = [
    {
      url: 'https://kumasihive.com/wp-content/uploads/2019/09/Connecttt.jpg',
      title: 'About Us!',
      description:
        'From 2015, Kumasi Hive has set itself apart as a leader in Technology and innovation in Kumasi and Ghana. This we have achieved through our wide range of training programs. We have run training in Internet of Things, Robotics, Graphic Design, Web Development and have won many awards across the globe. In a bid to increase our reach and create more impact, we present to you Hive Institute of Technology. The Hive Institute of Technology focuses on innovation, emerging technologies and hands on practicality. We are achieving this by imbibing problem solving abilities to our students, setting them apart from the masses.',
    },
    {
      url: 'assets/images/accreditation.jpg',
      title: 'Certifications',
      description:
        'Then again, certificates that are highly recognized by society and international institutions will be provided to the students, preferable from Universities like Kwame Nkrumah University Of Science and Technology, but to mention a few !',
    },
    {
      url: 'assets/images/core_values.jpg',
      title: 'Core Values',
      description:
        'To ensure that people get to have a practical experience and system of learning, the Hive Institute will provide a learning environment where students can enjoy both practical and experimental ways of studying. Also, the Institute will seek to ensure that courses that will be taught will provide value for money while giving students the exposure they need.',
    },
  ];
  headerPosts = [
    {
      image: 'assets/images/banners/culture.jpg',
      title: 'A culture where everyone can thrive',
      description:
        'We are focused on creating a vibrant community of belonging that pursues diversity, builds inclusion, and creates more equitable opportunities for learning.',
    },
    {
      image:
        'https://www.stanford.edu/wp-content/uploads/2017/03/hoover-background-lg-1499x552.jpg',
      title:
        'Hive Institute is shaped and strengthened by our many communities.',
      description:
        'We encourage our students to explore the academic landscape, venturing into unfamiliar fields of knowledge and, perhaps, discovering new passions that will take them in a different direction altogether.',
    },
    {
      image:
        'https://www.stanford.edu/wp-content/uploads/2019/01/fac-staff-hero-landscape-1499x522.jpg',
      title: 'People committed to public purpose',
      description:
        'Rich learning experiences that provide a broad liberal arts foundation and deep subject-area expertise. Unsurpassed opportunities to participate in the advancement of entire fields of knowledge',
    },
  ];

  constructor(private postService: PostService, private http: HttpClient) {}

  ngOnInit() {}
}
