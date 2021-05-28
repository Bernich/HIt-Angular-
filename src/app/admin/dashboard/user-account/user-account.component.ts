import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IUpdateUser, IUser } from '../../shared/models';
import { AuthService, UsersService } from '../../shared/services';

/** UserAccountComponent - Shows the activities that can be performed on a student account*/
@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {

  user: IUpdateUser = null;
  isGeneral = true;
  isLoading = false;
  focus = false;
  isNew = true;
  /**
   * Constructs the UserAccountComponent with the following injected services
   * @param authService  {AuthService}
   * @param userService {UsersService}
   * @param _snackBar {MatSnackBar}
   */
  constructor(
    private authService: AuthService,
    private userService: UsersService,
    private _snackBar: MatSnackBar
  ) { }

  /**
   *Inits the component
   */
  ngOnInit(): void {
    this.getUser();
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

  /**
   *Gets the User  into the global user
   */
  getUser() {
    this.authService.getCurrentUser().subscribe((x: IUpdateUser) => {
      this.user = x;
    });
  }

  /**
   *Updates a user's info. Info can be either resetting the password column or
   * updating username, email , phone number or profile picture
   * @todo fix update object and conditions check on password and profile picture
   */
  updateAccountDetails() {

    // open progress bar
    this.isLoading = true;

    // check password fields
    let update: IUpdateUser;

    // if there is data in the old password field
    if (this.user.old_password) {

      // check if the data in the new password and confirm password match
      if (this.user.new_password && this.user.password_confirm &&
        (this.user.password_confirm == this.user.new_password)
      ) {

        // check if the profile is an instance of a string
        if (this.user.profile_pic instanceof String || typeof (this.user.profile_pic) === 'string') {
          update = {
            email: this.user.email,
            lastname: this.user.lastname,
            firstname: this.user.firstname,
            phone_number: this.user.phone_number,
            user_id: this.user.user_id,
            old_password: this.user.old_password,
            new_password: this.user.new_password,
            password_confirm: this.user.password_confirm
          };

          // else send the profile Picture to be updated
        } else {
          update = {
            email: this.user.email,
            lastname: this.user.lastname,
            firstname: this.user.firstname,
            phone_number: this.user.phone_number,
            user_id: this.user.user_id,
            profile_pic: this.user.profile_pic,
            old_password: this.user.old_password,
            new_password: this.user.new_password,
            password_confirm: this.user.password_confirm
          };
        }
        this.saveUpdateFields(update);
      } else {

        // close progress
        this.isLoading = false;
        // show snackbar telling users password do not match
        this._snackBar.open('Passwords Input do not match', 'Please try again', {
          duration: 3000,
        });
      }
    } else {

      /**
       * Password Field has no data, Update only User Info
       * check if profile pic is an instance of a string
      **/
      if (this.user.profile_pic instanceof String || typeof (this.user.profile_pic) === 'string') {
        update = {
          email: this.user.email,
          lastname: this.user.lastname,
          firstname: this.user.firstname,
          phone_number: this.user.phone_number,
          user_id: this.user.user_id,
        };
      } else {
        // else use it without the image url
        update = {
          email: this.user.email,
          lastname: this.user.lastname,
          firstname: this.user.firstname,
          phone_number: this.user.phone_number,
          user_id: this.user.user_id,
          profile_pic: this.user.profile_pic
        };
      }

      // update data
      this.saveUpdateFields(update);
    }

  }

  /**
   * Update the fields in the User Data
   * @param update
   */
  saveUpdateFields(update: IUpdateUser) {
    this.userService.updateUser(update).subscribe((iuser: IUser) => {

      this.isLoading = false;
      this.getUser();

      this._snackBar.open('Account Successfully ', 'Updated', {
        duration: 3000,
      });
    },

      (error) => {
        this.isLoading = false;
        this._snackBar.open('Account details couldn\'t be updated', 'Please try again', {
          duration: 3000,
        });
      });
  }


  focusChange(event) {
    this.focus = true;
  }
}
