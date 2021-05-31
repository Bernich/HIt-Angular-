import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { CreateUser, IInstructor, IUser, SocialMediaHandle } from '../../shared/models';
import { AuthService, NavigationService, UsersService } from '../../shared/services';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class HiveAdminAddUserComponent implements OnInit {

  isNew = true;
  isGeneral = true;

  user: IUser = null;
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
    public authService: AuthService,
    private navigationService: NavigationService,
    private route: ActivatedRoute,
    private usersService: UsersService,
    private _snackBar: MatSnackBar,
  ) {

    // Check url if there is a course id else create a new course
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      // unpack old instructo
      this.loadUser(id);
      console.log(id)
      this.isNewInstrctor = false;
      this.isLoading = true;
    } else {
      // Create a new course
      this.createNewInstructor()
      this.isNewInstrctor = true;
    }


  }


  createNewInstructor() {
    this.user = new CreateUser();
    this.user.firstname = '';
    this.user.lastname = '';
    this.user.email = '';
    // this.user.bio = '';
    this.user.phone_number = '';


  }
  ngOnInit(): void {
  }



  loadUser(id: string) {


    this.usersService.getUserById(id).subscribe({
      next: (data: IUser) => {
        this.user = data;
        this.initialURL = data.profile_pic.url;
        this.isLoading = false;
      },
      error: (error) => {
        this.isLoading = false;
      }
    })
  }

  update() {
    // const instructor: CreateUpdateInstructorDTO = InstructorMapper.convertToUpdateDTO(this.user);

    // this.usersService.updateInstructor(this.user.instructor_id, instructor).subscribe((iuser: any) => {

    //   this.isLoading = false;
    //   // Navigating to the same route doesnt work
    //   // this.navigationService.editInstructor(this.user.instructor_id);

    //   this._snackBar.open('Update Instructor', `${this.user.firstname}`, {
    //     duration: 3000,
    //   });
    // },
    //   (error) => {
    //     this.isLoading = false;
    //     this._snackBar.open('Couldn\'t Update Instructor', `${this.user.firstname}`, {
    //       duration: 3000,
    //     });
    //   }
    // );

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


    // const instructor: CreateUser = this.user;

    // this.usersService.add(instructor).subscribe((iuser: any) => {


    //   this.isLoading = false;
    //   this.navigationService.editInstructor(this.user.instructor_id);

    //   this._snackBar.open('Created Instructor', `${this.user.firstname}`, {
    //     duration: 3000,
    //   });
    // },
    //   (error) => {
    //     this.isLoading = false;
    //     this._snackBar.open('Couldn\'t Create Instructor', `${this.user.firstname}`, {
    //       duration: 3000,
    //     });
    //   }
    // );
  }

  updateAcctTypeUser(data) { }
  suspendAccount() { }
  updateAcctTypeAdmin(data) { }
  updateAcctTypeInstructor(instructor) { }
  updateAccountDetails() {

  }

  /**
   * Switch To the general Tab
   */
  switchGeneral() {
    this.isGeneral = true;
  }

  /**
   * Switch To the Account Tab
   */
  switchAccount() {
    this.isGeneral = false;
  }

  hasRole(role: string) {

  }
}
