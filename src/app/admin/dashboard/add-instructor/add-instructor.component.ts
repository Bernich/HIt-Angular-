import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreateInstructor, SocialMediaHandle } from '../../shared/models';
import { InstructorService, AuthService, CreatePostService } from '../../shared/services';

@Component({
  selector: 'app-hive-admin-add-instructor-page',
  templateUrl: './add-instructor.component.html',
  styleUrls: ['./add-instructor.component.css'],
  providers: [CreatePostService]
})
export class HiveAdminAddInstructorComponent implements OnInit {

  imgUrl = 'https://hive-news.uc.r.appspot.com/republica.830aacc59b16116965b4.jpg';

  isLoading = false;

  whatssap = new SocialMediaHandle('LINKEDIN', '@url');
  facebook = new SocialMediaHandle('FACEBOOK', '@url');
  instagram = new SocialMediaHandle('INSTAGRAM', '@url');
  twitter = new SocialMediaHandle('TWITTER', '@url');

  instructor: CreateInstructor = new CreateInstructor();

  constructor(
    public postService: CreatePostService,
    private instructorService: InstructorService,
    private route: ActivatedRoute
  ) {

    // Create Mock instructor and use here
    this.instructor.bio = 'This is bio of the instructor ';
    this.instructor.email = 'noelnuel44@gamil.com';
    this.instructor.lastname = 'Emmanuel';
    this.instructor.firstname = 'Emmanuel';
    this.instructor.social_media_handles = [this.whatssap, this.facebook, this.instagram, this.twitter];

  }

  ngOnInit(): void {
    // check if there is an id in the url, then load the id else create a new author
    const slug = this.route.snapshot.paramMap.get('id');
    if (slug) {
      console.log('Has id, fetch and change state to update')
    } else {
      console.log('Has no id, create author');
    }

  }



  saveInstructor(instructor) {
    this.instructorService.add(instructor).subscribe({
      next: (data: any) => { console.log(data); },
      error: (err: any) => { console.log(err); }
    });
    console.log(instructor);
  }
}
