import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { UpdateUser } from '../../shared/dto';
import { UserMapper } from '../../shared/mapper/user.mapper';
import { CreateUser, IInstructor, IUser, SocialMediaHandle } from '../../shared/models';
import { AuthService, NavigationService, UsersService } from '../../shared/services';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class HiveAdminAddUserComponent implements OnInit {

  isGeneral = true;
  imageUrl = "";

  user: any = null;
  whatssap = new SocialMediaHandle('LINKEDIN', '@url');
  facebook = new SocialMediaHandle('FACEBOOK', '@url');
  instagram = new SocialMediaHandle('INSTAGRAM', '@url');
  twitter = new SocialMediaHandle('TWITTER', '@url');

  isLoading = false;
  isNewUser = false;
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
      this.isNewUser = false;
      this.isLoading = true;
    } else {
      // Create a new course
      this.createNewUser()
      this.isNewUser = true;
    }


  }


  createNewUser() {
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
      next: (data: any) => {
        // User
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

    (this.user)

    const _user: UpdateUser = UserMapper.convertToUpdateDTO(this.user);

    this.usersService.updateUser(_user).subscribe((iuser: any) => {

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

    if (this.isNewUser) {
      this.save()
    } else {
      this.update()
    }
  }


  save() {

    const new_user: CreateUser = this.user;

    this.authService.signUp(new_user).subscribe((iuser: any) => {

      this.isLoading = false;
      this.navigationService.editUser(iuser.user_id);

      this._snackBar.open('Created user', `${this.user.firstname}`, {
        duration: 3000,
      });
    },
      (error) => {
        this.isLoading = false;
        this._snackBar.open('Couldn\'t Create user', `${this.user.firstname}`, {
          duration: 3000,
        });
      }
    );
  }



  /**
   * Suspends or Activagte a users account by toggling isActive
   * @see IUser.is_active
   */
  suspendAccount() {
    /**Creates an object to post and set is_active to the not(is_avtive)
     * That means if initially
     * is_active = true
     * !is_active = false
    */

    /**
     * todo fix this
     */
    const status = {
      is_active: !this.user.is_active
    };


    /**Trigger update status */
    this.usersService.updateAccountStatus(this.user.user_id, status).subscribe((x) => {
      this.isLoading = true;
      this.loadUser(this.user.user_id);
      this._snackBar.open('Account status updated', 'successfully', {
        duration: 3000,
      });
    },
      (error) => {
        this._snackBar.open('Updating account status Failed', 'Please try again', {
          duration: 3000,
        });
      });
  }

  /**
   * Adds a role to a users list of roles
   * @param role {string}
   */
  addRole(role: string) {
    this.user.roles.push(role);
  }



  /**
  * Update An Account Type to User
  * @param isChecked {boolean}
  */
  updateAcctTypeUser(isChecked) {
    if (isChecked) {
      this.addRole('USER');
    }
    else {
      this.removeRole('USER');
    }

    // Update the roles of the user
    this.updateUserRole();
  }



  /**
   *Update An Account Type to Admin
   * @param isChecked {boolean}
   */
  updateAcctTypeAdmin(isChecked) {
    if (isChecked) {
      this.addRole('ADMIN');
    } else {
      this.removeRole('ADMIN');
    }

    // Update the roles of the user
    this.updateUserRole();
  }

  /**
   * Update An Account Type to Instructor
   * @param isChecked {boolean}
   */
  updateAcctTypeInstructor(isChecked) {
    if (isChecked) {
      this.addRole('INSTRUCTOR');
    }
    else {
      this.removeRole('INSTRUCTOR');
    }

    // Update the roles of the user
    this.updateUserRole();
  }

  /**
 * Update An Account Type to Author
 * @param isChecked {boolean}
 */
  updateAcctTypeAuthor(isChecked) {

    if (isChecked) {
      this.addRole('AUTHOR');
    }
    else {
      this.removeRole('AUTHOR');
    }

    // Update the roles of the user
    this.updateUserRole();
  }

  /**
   * Removes a role from a users list of roles
   * @param role
   */
  removeRole(role: string) {
    this.user.roles = this.user.roles.filter((val) => {
      if (role != val) {
        return role;
      }
    });
  }


  /**
   *Updates a user account data
   */
  updateUserRole() {
    const uid = this.user.user_id;

    this.usersService.updateRole(uid, this.user.roles).subscribe((iuser) => {
      this.loadUser(this.user.user_id);
    });
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

  hasRole(user_role: string) {
    // decode the token to get its payload

    const roles = this.user.roles.filter((role) => role.toLowerCase() === user_role.toLowerCase());

    if (roles.length >= 1) {
      return true;
    }

    return false;
  }
}
