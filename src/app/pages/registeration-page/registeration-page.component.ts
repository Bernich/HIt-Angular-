import { Component, Input, OnInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { ICourse } from 'src/app/admin/shared/models';
import { IQuestion, IQuiz, Options, QuestionAnswer } from 'src/app/admin/shared/models/question.model';
import { AuthService, CourseService, NavigationService, NotificationService } from 'src/app/admin/shared/services';
import { Enrollment } from 'src/app/admin/shared/models/enrollment.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registeration-page',
  templateUrl: './registeration-page.component.html',
  styleUrls: ['./registeration-page.component.css']
})
export class RegisterationPageComponent implements OnInit {


  LINEAR_SCALETYPE = "LINEAR_SCALE";
  MULTIPLE_CHOICETYPE = "MULTIPLE_CHOICE";
  SHORT_ANSWER = "SHORT_ANSWER";
  CHECKBOXESTYPE = "CHECKBOXES";

  isLoading = false;
  email: string = "";
  password: string = "";
  fname: string = "";
  lname: string = "";
  dob: string = "";
  phonenumber: string = "";



  course: ICourse = null;

  constructor(
    private authService: AuthService,
    private navigationService: NavigationService,
    private notificationService: NotificationService,
    private courseService: CourseService,
    private route: ActivatedRoute,

  ) { }



  ngOnInit(): void {

    // Check url if there is a course id else create a new course
    const slug = this.route.snapshot.paramMap.get('slug');

    if (slug) {
      // unpack old course
      // this.course = unpack
      this.loadCourseWithSlug(slug);
    } else {
      // Create a new course
      // this.course = new CreateCourse()
    }
  }


  signin() {

    // this.isLoading = true;

    // this.authService.signin(this.email, this.password).subscribe({
    //   next: (data: any) => {
    //     // save token to local storage
    //     this.authService.saveUserToken(data.token);

    //     // redirect user to the dashboard
    //     this.navigationService.navigateToDashboard();
    //   },
    //   error: (err: any) => {
    //     // console.log(err);
    //     this.isLoading = false;

    //     this.notificationService.openSnackBar("Login Failed", err.error)
    //   }
    // })

  }


  loadCourseWithSlug(slug) {
    this.courseService.getCourseWithSlug(slug).subscribe({
      next: (data: ICourse) => {
        this.course = data
      },
      error: (err: any) => { }
    });
  }


  updateCheckBoxQuestionType(ticked, question_position: number, option: Options) {

    // Verify if object exist
    if (!this.course.quiz.questions[question_position].user_answers) {
      this.course.quiz.questions[question_position].user_answers = [];
    }


    if (ticked) {
      //  Find the specific option that was ticked
      const answer = this.course.quiz.questions[question_position].answers.reduce((previous, current,) => {
        if (current.id === option.id) {
          current.ticked = true;
          return current
        }
        else return previous
      });

      // Create an answer model
      const new_answer = new QuestionAnswer(answer.id, answer.answer);

      // Push to the correct answers
      this.course.quiz.questions[question_position].user_answers.push(new_answer);
    } else {
      // check  if it is a  part of the correct answers
      this.course.quiz.questions[question_position].user_answers = this.course.quiz.questions[question_position].user_answers.filter((elem) => elem.id !== option.id)
    }
    console.log(this.course.quiz.questions[question_position].user_answers)

    console.log(ticked)


  }



  updateRadioBoxQuestionType(ticked, question_position: number, option: Options) {

    // Verify if object exist
    this.course.quiz.questions[question_position].user_answers = [];



    //  Find the specific option that was ticked
    const answer = this.course.quiz.questions[question_position].answers.reduce((previous, current,) => {
      if (current.id === option.id) {
        current.ticked = true;
        return current
      }
      else return previous
    });

    // Create an answer model
    const new_answer = new QuestionAnswer(answer.id, answer.answer);

    // Push to the correct answers
    this.course.quiz.questions[question_position].user_answers.push(new_answer);

    console.log(this.course.quiz.questions[question_position].user_answers)

    // console.log(ticked)


  }


  updateSimpleAnswerQuestionType(answer, question_position: number) {

    // Verify if object exist
    this.course.quiz.questions[question_position].user_answers = [];


    // Create an answer model
    const new_answer = new QuestionAnswer(uuidv4(), answer.answer);

    // Push to the correct answers
    this.course.quiz.questions[question_position].user_answers.push(new_answer);

    // console.log(this.course.quiz.questions[question_position].correct_answers)
  }

  updateLinearScaleQuestionType(scale_value, question_position: number) {

    // Verify if object exist
    this.course.quiz.questions[question_position].user_answers = [];

    // Create an answer model
    const new_answer = new QuestionAnswer(uuidv4(), scale_value);

    // Push to the correct answers
    this.course.quiz.questions[question_position].user_answers.push(new_answer);

    console.log(this.course.quiz.questions[question_position].user_answers)

  }


  submitEnrollment() {
    // copy quiz
    const quiz = this.course.quiz;

    const enrollment = new Enrollment();
    enrollment.firstname = this.fname;
    enrollment.lastname = this.lname;
    enrollment.email = this.email;
    enrollment.phone_number = this.phonenumber;

    enrollment.course_id = this.course.course_id;
    enrollment.course_name = this.course.name;

    enrollment.quiz = this.mapOutTicked(quiz);


    console.log(JSON.stringify(enrollment));

    this.isLoading = true;

    this.authService.enrollCourse(enrollment).subscribe({
      next: (data) => {
        this.isLoading = true;

        this.navigationService.navigateToCompleteEnrollment(this.course.slug);
        // Show a success page
      },
      error: (err) => {
        console.log(err)
        this.isLoading = true;

        // Show an error page
      }
    })
  }


  mapOutTicked(quiz: IQuiz) {
    let CHECKBOXESTYPE = "CHECKBOXES";
    let MULTIPLE_CHOICETYPE = "MULTIPLE_CHOICE";
    let SIMPLE_ANSWER_CHOICETYPE = "SHORT_ANSWER";

    const new_questions: IQuestion[] = [];


    for (const question of quiz.questions) {
      // If it is checkbox or multiple choice then it definitely has a ticked in it
      if (question.question_type === MULTIPLE_CHOICETYPE || question.question_type === CHECKBOXESTYPE) {
        // go through all options and parse them

        question.linear_scale = null;
        const answers = [];

        // Map through questions and fill correct answers against answers
        question.answers.forEach((answer: Options) => {
          const new_answer = new QuestionAnswer(answer.id, answer.answer);
          if (answer.ticked) question.user_answers.push(new_answer);

          answers.push(new_answer);
        });

        // set new answers
        question.answers = answers;
        question.user_answers = answers;

        new_questions.push(question);
      }

      else if (question.question_type === SIMPLE_ANSWER_CHOICETYPE) {

        question.linear_scale = null;
        new_questions.push(question);
      }
      else {
        new_questions.push(question);
      }
    }

    quiz.questions = new_questions;

    return quiz;
  }
}
