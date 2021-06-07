import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { CreateUpdateInstructorDTO, ICreateInstructorDTO } from '../../shared/dto';
import { InstructorMapper } from '../../shared/mapper/instructor.mapper';
import { CreateInstructor, ICourse, IInstructor, SocialMediaHandle } from '../../shared/models';
import { InstructorService, NavigationService } from '../../shared/services';

@Component({
  selector: 'app-add-instructor',
  templateUrl: './add-instructor.component.html',
  styleUrls: ['./add-instructor.component.css']
})
export class HiveAdminAddInstructorComponent implements OnInit {



  user: CreateInstructor = null;
  whatssap = new SocialMediaHandle('LINKEDIN', '@url');
  facebook = new SocialMediaHandle('FACEBOOK', '@url');
  instagram = new SocialMediaHandle('INSTAGRAM', '@url');
  twitter = new SocialMediaHandle('TWITTER', '@url');

  isLoading = false;
  isNewInstrctor = false;
  initialURL = "";
  courses_ticked = [
  ];


  checked = true;
  constructor(
    private navigationService: NavigationService,
    private route: ActivatedRoute,
    private instructorService: InstructorService,
    private _snackBar: MatSnackBar,
  ) {

    // Check url if there is a course id else create a new course
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      // unpack old instructo
      this.loadInstructor(id);
      this.isNewInstrctor = false;
      this.isLoading = true;
    } else {
      // Create a new course
      this.createNewInstructor()
      this.isNewInstrctor = true;
    }


  }


  createNewInstructor() {
    this.user = new CreateInstructor();
    this.user.firstname = '';
    this.user.lastname = '';
    this.user.email = '';
    this.user.bio = '';
    this.user.phone_number = '';
    this.user.skills = [''];
    this.user.social_media_handles = [
      this.whatssap,
      this.facebook,
      this.instagram,
      this.twitter
    ];

  }
  ngOnInit(): void {
  }



  loadInstructor(id: string) {


    this.instructorService.query(id).subscribe({
      next: (data: IInstructor) => {
        this.user = InstructorMapper.convertFromDTO(data);
        this.initialURL = data.profile_pic.url;
        this.isLoading = false;
      },
      error: (error) => {
        this.isLoading = false;
      }
    })
  }

  update() {

    const instructor: CreateUpdateInstructorDTO = InstructorMapper.convertToUpdateDTO(this.user);


    this.instructorService.updateInstructor(this.user.instructor_id, instructor).subscribe((iuser: any) => {

      this.isLoading = false;
      // Navigating to the same route doesnt work
      // this.navigationService.editInstructor(this.user.instructor_id);

      this._snackBar.open('Update Instructor', `${this.user.firstname}`, {
        duration: 3000,
      });
    },
      (error) => {
        this.isLoading = false;
        this._snackBar.open('Couldn\'t Update Instructor', `${this.user.firstname}`, {
          duration: 3000,
        });
      }
    );

  }




  saveUser() {
    this.isLoading = true;

    if (this.isNewInstrctor) {
      this.save()
    } else {
      this.update()
    }
  }


  save() {


    const instructor: CreateInstructor = this.user;

    this.instructorService.add(instructor).subscribe((iuser: any) => {


      this.isLoading = false;
      this.navigationService.editInstructor(this.user.instructor_id);

      this._snackBar.open('Created Instructor', `${this.user.firstname}`, {
        duration: 3000,
      });
    },
      (error) => {
        this.isLoading = false;
        this._snackBar.open('Couldn\'t Create Instructor', `${this.user.firstname}`, {
          duration: 3000,
        });
      }
    );
  }

}
