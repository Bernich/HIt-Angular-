/**
 * Students Dashboard Page allows students or Users to see the enrolled and
 * recommended courses.
 * @author Botchway
 * @author dkkyeremateng
 */
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IUser } from 'src/app/shared/models/user.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { NavigationService } from 'src/app/shared/services/navigation.service';
import { EnrollWithReferenceDialogComponent } from './components/enroll-with-reference-dialog/enroll-with-reference-dialog.component';

/**
 * Student Dashboard Page
 */
@Component({
  selector: 'app-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {

  // drawer = true;
  user: IUser = null;
  isLoading = true;


  links = [
    { path: 'courses', icon: 'apps', title: 'Courses' },
    { path: 'certificates', icon: 'card_membership', title: 'Certificates' },
    { path: 'purchase-history', icon: 'payment', title: 'Purchases' },
    { path: 'account', icon: 'lock', title: 'Account' },
    // { path: "feedback", icon: 'feedback', title: 'Feedback' },
  ];

  /**
   * Constructs a new StudentDashboardComponent with the injected serveices
   * @param authService {AuthService}
   * @param navigationService {NavigationService}
   */
  constructor(
    public authService: AuthService,
    private navigationService: NavigationService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }

  /**
   * Initializes and calls the get current user
   */
  ngOnInit(): void {
    this.getUser();
  }

  /**
   * Lifecycle Hook that gets called when View is completely loaded
   * @see https://angular.io/api/core/AfterViewInit#ngAfterViewInit
   */
  ngAfterViewInit() {
    // set active lesson
  }

  /**
   * Loggs the current user out
   */
  logOut() {
    this.authService.logout();
    this.navigationService.navigateToCourses();
  }

  // toggleSideNav(drawer) {
  //   this.drawer = !drawer;
  //   drawer.mode(this.drawer)
  // }

  /**
   * Loads the current User logged in
   */
  getUser() {
    this.authService.getCurrentUser().subscribe((x: IUser) => {
      this.user = x;
      this.isLoading = false;
    });

  }


  /**
   * When users fail to wait for paystack to process transaction. Courses does not
   * reflect on the backend or in the users courses as bought. This allows the users
   * to enter enroll a course using the transaction reference sent to them by paystack
   */
  enrollWithTrx() {

    const dialogRef = this.dialog.open(EnrollWithReferenceDialogComponent, { data: { message: 'Check your email for the courses\'s transaction reference.', }, });

    dialogRef.afterClosed().subscribe(result => {

      const { state } = result;

      if (state === 'SUCCESS') {
        window.location.reload();
      }

    });
  }

}
