import { DOCUMENT, Location } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { AnimationItem } from 'lottie-web';
import { config } from 'process';
import { ICourse } from 'src/app/admin/shared/models';
import { CourseService, NavigationService } from 'src/app/admin/shared/services';

@Component({
  selector: 'app-completed-registeration-page',
  templateUrl: './completed-registeration-page.component.html',
  styleUrls: ['./completed-registeration-page.component.css']
})
export class CompleteCourseRegisterationComponent implements OnInit {

  course: ICourse = null;
  isLoading = true;
  verifying_coupon = false;

  valid_coupon: boolean = null;

  course_discounted_price = 0;
  new_coupon_price = null;
  invalid_coupon_error = '';
  coupon_code: string = null;
  has_coupon = false;
  isSpinnerLoading = false;
  paymentLoader = false;

  countTrialTimes = 0;





  constructor(
    private navigationService: NavigationService,
    private route: ActivatedRoute,
    private courseService: CourseService,
    private snack: MatSnackBar,
    private renderer2: Renderer2,
    private _location: Location,
    @Inject(DOCUMENT) private _document,

  ) { }


  // 3. call them in ngOnInit - using onload for dependencies
  ngOnInit() {
    const s = this.renderer2.createElement('script');
    s.onload = this.loadNextScript.bind(this);
    s.type = 'text/javascript';
    s.src = 'https://cdnjs.cloudflare.com/ajax/libs/particlesjs/2.2.2/particles.min.js'; // Defines someGlobalObject
    this.renderer2.appendChild(this._document.body, s);


    // this.getUser();

    const slug = this.route.snapshot.paramMap.get('slug');

    this.courseService
      .getCourseWithSlug(slug)
      .subscribe(
        {
          next: (data: ICourse) => {


            this.course = data;


            // stop loading
            this.isLoading = false;

            // if the user is already enrolled
            // if (this.course.is_enrolled) { this.navigationService.navigateToDashboardCourses(); }

            // if course if null show page not Found
            // if (this.course == null) { this.navigationService.navigateToCourses(); }


          }
        }
      );

  }

  loadNextScript() {

    console.log("load next");
    const s = this.renderer2.createElement('script');
    s.text = `
  Particles.init({
    selector: '.background',
    color: ['#DA0463', '#404B69', '#DBEDF3'],
    sizeVariations:4,
  });
`;

    // var particles = Particles.init({
    //   selector: '.background',
    //   color: ['#DA0463', '#404B69', '#DBEDF3'],
    //   connectParticles: true
    // });
    // Particles.init({
    // 	selector: '.background',
    //   color: '#DA0463'
    // });
    this.renderer2.appendChild(this._document.body, s);
  }



  animationCreated(animationItem: AnimationItem): void {

  }



}
