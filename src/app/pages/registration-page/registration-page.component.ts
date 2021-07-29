import { Component, OnInit } from '@angular/core';
import { ICourse } from 'src/app/admin/shared/models';
import {
  IQuestion,
  IQuiz,
  Options,
  QuestionAnswer,
} from 'src/app/admin/shared/models/question.model';
import {
  AuthService,
  CourseService,
  NavigationService,
  NotificationService,
} from 'src/app/admin/shared/services';
import { Enrollment } from 'src/app/admin/shared/models/enrollment.model';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css'],
})
export class RegistrationPageComponent implements OnInit {
  isLoading = false;
  submitted = false;
  flash = false;
  fyi =
    'Please note the answers provided above will play a role in your acceptance into this program. ';

  alertMessage: string;
  alertCategory: string;
  firstname: string;
  email: string;
  password: string;
  lastname: string;
  phoneNumber: string;

  course: ICourse;

  registrationForm: FormGroup;

  LINEAR_SCALE_TYPE = 'LINEAR_SCALE';
  MULTIPLE_CHOICE_TYPE = 'MULTIPLE_CHOICE';
  SHORT_ANSWER = 'SHORT_ANSWER';
  CHECKBOXES_TYPE = 'CHECKBOXES';

  ngOnInit() {
    // Check url if there is a course id else create a new course
    const slug = this.route.snapshot.paramMap.get('slug');

    if (slug) {
      this.loadCourseWithSlug(slug);
    } else {
      // this.course = new CreateCourse()
    }

    this.registrationForm = new FormGroup({
      firstname: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      lastname: new FormControl(null, Validators.required),
      phoneNumber: new FormControl(null, [
        Validators.required,
        Validators.pattern(
          '^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$'
        ),
      ]),
    });
  }

  constructor(
    private authService: AuthService,
    private navigationService: NavigationService,
    private notificationService: NotificationService,
    private courseService: CourseService,
    private route: ActivatedRoute
  ) {}

  signIn() {}

  loadCourseWithSlug(slug: string) {
    this.courseService.getCourseWithSlug(slug).subscribe({
      next: (data: ICourse) => {
        this.course = data;
      },
      error: (err: any) => {},
    });
  }

  updateCheckBoxQuestionType(
    ticked: boolean,
    option: Options,
    questionPosition: number
  ) {
    // Verify if object exist
    if (!this.course.quiz.questions[questionPosition].user_answers) {
      this.course.quiz.questions[questionPosition].user_answers = [];
    }

    if (ticked) {
      // Create an answer model
      const UserAnswer = new QuestionAnswer(option.id, option.answer);

      // Push to the correct answers
      this.course.quiz.questions[questionPosition].user_answers.push(
        UserAnswer
      );
    } else {
      // check  if it is a  part of the correct answers
      this.course.quiz.questions[questionPosition].user_answers =
        this.course.quiz.questions[questionPosition].user_answers.filter(
          (elem) => elem.id !== option.id
        );
    }
  }

  updateRadioBoxQuestionType(option: Options, questionPosition: number) {
    // Verify if object exist
    if (!this.course.quiz.questions[questionPosition].user_answers) {
      this.course.quiz.questions[questionPosition].user_answers = [];
    }

    // Get question id
    const QuestionID = this.course.quiz.questions[questionPosition].id;

    // Create an answer model
    const UserAnswer = new QuestionAnswer(QuestionID, option.answer);

    // Push to the correct answers
    this.course.quiz.questions[questionPosition].user_answers.push(UserAnswer);
  }

  updateSimpleAnswerQuestionType(answer: string, questionPosition: number) {
    // Verify if object exist
    if (!this.course.quiz.questions[questionPosition].user_answers) {
      this.course.quiz.questions[questionPosition].user_answers = [];
    }

    // Get question id
    const QuestionID = this.course.quiz.questions[questionPosition].id;

    // Create an answer model
    const UserAnswer = new QuestionAnswer(QuestionID, answer);

    // Push to the correct answers
    this.course.quiz.questions[questionPosition].user_answers.push(UserAnswer);
  }

  updateLinearScaleQuestionType(value: string, questionPosition: number) {
    // Verify if object exist
    if (!this.course.quiz.questions[questionPosition].user_answers) {
      this.course.quiz.questions[questionPosition].user_answers = [];
    }

    // Get question id
    const QuestionID = this.course.quiz.questions[questionPosition].id;

    // Create an answer model
    const UserAnswer = new QuestionAnswer(QuestionID, value);

    // Push to the correct answers
    this.course.quiz.questions[questionPosition].user_answers.push(UserAnswer);
  }

  onSubmit() {}

  submitEnrollment() {
    // copy quiz
    if (this.submitted === false) {
      // block the button
    } else {
    }

    const quiz = this.course.quiz;

    const enrollment = new Enrollment();

    enrollment.firstname = this.registrationForm.value.firstname;
    enrollment.lastname = this.registrationForm.value.lastname;
    enrollment.email = this.registrationForm.value.email;
    enrollment.phone_number = this.registrationForm.value.phoneNumber;
    enrollment.course_id = this.course.course_id;
    enrollment.course_name = this.course.name;
    enrollment.quiz = this.course.quiz;

    this.isLoading = true;

    this.authService.enrollCourse(enrollment).subscribe({
      next: (data) => {
        this.isLoading = true;

        this.navigationService.navigateToCompleteEnrollment(this.course.slug);
      },
      error: (err) => {
        this.flash = true;
        this.alertCategory = 'error';
        this.alertMessage =
          err.error.error || 'Unable to enroll into course, try again!';
        this.isLoading = false;
      },
    });
  }
}
