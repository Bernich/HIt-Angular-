import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import {
  Course,
  CreateCourse,
  CreateLesson,
  CreateSection,
  FileData,
  ICourse,
  IInstructor,
  ILesson,
  IUser,
  Resource
} from '../../shared/models';
import {
  AuthService,
  InstructorService,
  CreatePostService,
  CourseService,
  NavigationService,
  NotificationService,
  UsersService
} from '../../shared/services';
import { CoursesBottomSheetComponent } from './add-course-bottomsheet.component';
import { v4 as uuidv4 } from 'uuid';
import { ActivatedRoute } from '@angular/router';
import { CourseMapper } from '../../shared/mapper/course.mapper';
import { CreateQuestion, Options, QuestionAnswer, QuestionInputTypes, Quiz } from '../../shared/models/question.model';


export const CHECKBOXESTYPE = "CHECKBOXES"
export const MULTIPLE_CHOICETYPE = "MULTIPLE_CHOICE"

@Component({
  selector: 'app-hive-admin-add-news-page',
  templateUrl: './add-course.component.html',
  styleUrls: [
    './add-course.component.css',
    'add-course-section.css',
    'add-course-module.css',
    'add-course-main.css',
    'questions.component.css',
    'instructors-image-profile.css'
  ],
  providers: [CreatePostService]
})
export class HiveAdminAddCourseComponent implements OnInit {


  /******************************* */
  // Course Specific details
  isPublished: boolean = false;
  /******************************* */

  imgUrl = 'https://hive-news.uc.r.appspot.com/republica.830aacc59b16116965b4.jpg';
  publish: false = false;
  categoryControl = new FormControl('', Validators.required);


  isNewCourse = true; /**Check if a course is new */

  isLoading = {
    instructors: false,
    course: false
  }

  instructors: IInstructor[] = [];

  developers: IUser[] = [];


  selectedInstructors: IInstructor[] = [];
  selectedDevelopers: any[] = [];

  panelOpenState = false;

  thumbnailURL = "";

  categories = [
    'IOT',
    'Event',
    'Funding Oppurtunities',
    'Podcast'
  ];

  skill_level = [
    "Beginner",
    "Intermediate",
    "Professional"
  ]

  /********** */
  // Tick for users
  selectedTick: boolean = false;

  printTick(checked) {
    console.log(checked);
    console.log(this.selectedTick);

  }
  /************* */

  questionsInputType = QuestionInputTypes;

  /**Toggle between the tabs in the course state */
  stateTabs = {
    createCourse: true,
    questions: false,
    curriculumTab: false
  };

  /** Course instance model **/
  course: CreateCourse = null;

  constructor(
    private route: ActivatedRoute,
    private bottomSheet: MatBottomSheet,
    public authService: AuthService,
    private notificationService: NotificationService,
    private instructorService: InstructorService,
    private courseService: CourseService,
    private navigationService: NavigationService,
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
    // load all authors
    this.loadAllAuthors();

    this.loadDevelopers();
    // Check url if there is a course id else create a new course
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.isNewCourse = false;
      // load course and unpack
      this.loadCourse(id);
    } else {
      this.isNewCourse = true;

      // Create a new course
      this.course = new CreateCourse()
    }
  }

  publisCourse() {
    this.courseService.approveCourse(this.course.course_id).subscribe({
      next: (data) => {
        this.notificationService.openSnackBar("Course Published", this.course.name + "");

        // reload course
        this.loadCourse(this.course.course_id);
      },
      error: (err) => {
        this.notificationService.openSnackBar("Course Publishing Failed " + err.error, "Try Again");
      }
    });
  }

  loadCourse(id) {
    this.courseService.findAdminCourse(id).subscribe({
      next: (data: any) => {

        this.course = CourseMapper.convertToCreate(data);
        this.isPublished = data.is_approved;
        // setisNew to false
        this.isNewCourse = false;

        // store current thumbnail and banner
        this.thumbnailURL = data.thumbnail.url;
        this.imgUrl = data.banner.url;

        //put instructors in selected instructors
        this.selectedInstructors = data.instructors;
        this.selectedDevelopers = data.developers ? this.convertToDeveloperToModel(data.developers) : [];

        this.isLoading = { ...this.isLoading, course: false };
      },
      error: (err: any) => {
        this.isLoading = { ...this.isLoading, course: false };

      }
    })
  }


  /**
   * Convert Developers model to a fixed model supported by {@link IInstructor}
   * @param devs
   */
  convertToDeveloperToModel(devs: any) {
    const developers = []

    for (const item of devs) {
      const new_dev = {
        firstname: item.fullname,
        lastname: "",
        profile_pic: {
          url: item.image_url
        },
        user_id: item.id
      }

      developers.push(new_dev)
    }


    return developers;
  }

  /**
   *Loads all developers of the curricullum
   */
  loadDevelopers() {
    this.usersService.all("users").subscribe({
      next: (data: any) => {
        this.developers = data;
      }
    });
  }

  /**
   * Saves or Updates a course
   *  {@link updateCourse()}
   */
  save() {
    this.isLoading = { ...this.isLoading, course: true };

    if (this.isNewCourse) {
      this.saveCourse()
    } else {
      this.updateCourse();
    }
  }


  updateCourse() {
    // convert post authors into an id
    this.course.instructors = this.getCourseInstructos();
    this.course.developers = this.getCourseDevelopers();

    const new_course = CourseMapper.convertToDTO(this.course);


    this.isLoading = { ...this.isLoading, course: true };

    this.courseService.updateCourse(new_course).subscribe({
      next: (data: ICourse) => {

        this.isLoading = { ...this.isLoading, course: false };

        this.notificationService.openSnackBar("Course Updated", data.name);
        this.navigationService.navigateToEditCourse(data.course_id)
      },
      error: (error: any) => {
        this.notificationService.openSnackBar("Updating course failed", error.error);

        this.isLoading = { ...this.isLoading, course: false };
      }
    });
  }

  saveCourse() {

    // convert post authors into an id
    this.course.instructors = this.getCourseInstructos();
    this.course.developers = this.getCourseDevelopers();


    const new_course = CourseMapper.convertToDTO(this.course);

    this.courseService.add(new_course).subscribe({
      next: (data: ICourse) => {

        this.notificationService.openSnackBar("Course Saved", data.name);
        this.navigationService.navigateToEditCourse(data.course_id)
      },
      error: (error: any) => {
        this.notificationService.openSnackBar("Saving course failed", error.error);

        this.isLoading = { ...this.isLoading, course: false };
      }
    });
  }


  updateBannerImage(data: { url: string, data: FileData }) {
    this.imgUrl = data.url;
    this.course.banner_data = data.data;
  }


  switchQuestionType(question_position, type) {

    if (type === CHECKBOXESTYPE || type === MULTIPLE_CHOICETYPE) {
      // TODO : reset types to checkbox
      // remove linear scale from options
      this.course.quiz.questions[question_position].linear_scale = null;
    } else if (type === CHECKBOXESTYPE) {
      // TODO : reset types to checkbox
      // this.course.quiz.questions[question_position].linear_scale = null;

    }



  }
  openBottomSheet() {
    // Remove all selected authors and send to bottomsheet

    // open sheet
    this.bottomSheet.open(CoursesBottomSheetComponent, {
      data: { instructors: this.instructors, selected: this.selectedInstructors },
    });

    // subscribe to observable that emit event when bottom sheet closes
    this.bottomSheet._openedBottomSheetRef.afterDismissed().subscribe((data: any) => {

      // pick data from opened bottom sheet
      if (data.data) {
        this.selectedInstructors.push(data.data);
      }
    });
  }


  openDevelopersBottomSheet() {
    // open sheet
    this.bottomSheet.open(CoursesBottomSheetComponent, {
      data: { instructors: this.developers, selected: this.selectedDevelopers },
    });

    // subscribe to observable that emit event when bottom sheet closes
    this.bottomSheet._openedBottomSheetRef.afterDismissed().subscribe((data: any) => {

      // pick data from opened bottom sheet
      if (data.data) {
        this.selectedDevelopers.push(data.data);
      }
    });
  }


  getCourseInstructos(): string[] {
    return this.selectedInstructors.map((instructor: IInstructor) => {
      return instructor.instructor_id
    })
  }

  getCourseDevelopers(): string[] {
    return this.selectedDevelopers.map((developer: IUser) => {
      return developer.user_id
    })
  }

  loadAllAuthors() {
    this.isLoading = { ...this.isLoading, instructors: true };

    this.instructorService.all().subscribe({
      next: (data: any) => {

        this.isLoading = { ...this.isLoading, instructors: false };
        this.instructors = data;
      },
      error: (error) => {
        this.isLoading = { ...this.isLoading, instructors: false };
      }
    });
  }

  switchToCurriculumCourseTab() {
    this.stateTabs = {
      ...this.stateTabs,
      curriculumTab: true,
      createCourse: false,
      questions: false
    };
  }

  switchToEditCourseTab() {
    this.stateTabs = {
      ...this.stateTabs,
      curriculumTab: false,
      createCourse: true,
      questions: false
    };
  }


  switchToQuestionsTab() {
    this.stateTabs = {
      ...this.stateTabs,
      curriculumTab: false,
      createCourse: false,
      questions: true
    };
  }
  /**
   * Process an input file selected by the user.
   * Checks if the type is a BANNER or a THUMBNAIL
   * @param imageInput
   */
  processFile(imageInput, type: string) {

    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.addEventListener('load', (event: any) => {

      if (type = 'THUMBMAIL') {
        this.thumbnailURL = (event.target.result);
        const data = event.target.result.substr(event.target.result.indexOf('base64,') + 'base64,'.length);
        this.course.thumbnail_data = new FileData(file.type, data)

      }

    });

  }

  removeUser(instructor: IInstructor) {
    this.selectedInstructors = this.selectedInstructors.filter((user: IInstructor) => instructor.instructor_id !== user.instructor_id);
  }

  removeDeveloper(item: any) {

    this.selectedDevelopers = this.selectedDevelopers.filter((dev: any) => item.user_id !== dev.user_id);

  }
  removeLesson(section_position, id) {
    this.course.curriculum[section_position].lessons = this.course.curriculum[section_position].lessons.filter((lesson: CreateLesson) => lesson.id !== id)
  }

  /**
   * Adds a new Lesson to the Lessons list using the lesson position
   * @param section_position
   * @param $event
   */
  addLesson(section_position, $event) {
    const lesson = new CreateLesson(this.course.course_id);
    this.course.curriculum[section_position].lessons.push(lesson);

  }

  /**
   * Removes a section using a section ID
   * @param section_id
   */
  deleteSection(section_id) {
    this.course.curriculum = this.course.curriculum.filter((section: CreateSection) => section.id !== section_id)
  }

  /**
   * Rearrange a section after its dropped
   * @param $event
   */
  addSection($event) {
    const section = new CreateSection(this.course.course_id);
    this.course.curriculum.push(section);
  }


  /**
   * Adds a new Question to the questions list {@link IQuestion}
   * @param $event
   *
   */
  addQuestion($event) {
    const question = new CreateQuestion();

    if (!this.course.quiz.questions) {
      this.course.quiz = new Quiz();
      // TODO : FIX this - Forcefully map questions to array
      this.course.quiz.questions = [];
    }

    this.course.quiz.questions.push(question);
  }

  /**
   * Rearrange a question when it is dropeed
   * @param event
   */
  dropQuestion(event: CdkDragDrop<string[]>) {

  }
  dropSection(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.course.curriculum, event.previousIndex, event.currentIndex);
  }

  updateObjective(data: Resource[]) {
    this.course.what_you_will_learn = data;
  }

  updateCourseMaterials(data: Resource[]) {
    this.course.teaching_resources = data;
  }


  updatePrereq(data: Resource[]) {
    this.course.prerequisites = data;
  }

  updateCareerPath(data: Resource[]) {
    // this.course.career_paths = data.map((data: Resource) => data.value);
    this.course.career_paths = data;
  }


  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'Mins';
    }
    return value;
  }

  /************************************* */

  /**
   *  When a question is dropped, rearrange the order of the questions
   * @param event
   */
  // drop(event: CdkDragDrop<string[]>) {
  // moveItemInArray(this.course.quiz.questions[this.section_position].lessons[this.lesson_position].quiz.questions, event.previousIndex, event.currentIndex);
  // }

  /**
   *  Adds an option to the list of options for a particular question
   * @param position
   */
  addOption(position: number) {
    const new_answer: Options = new Options();

    if (this.course.quiz.questions[position].answers)
      this.course.quiz.questions[position].answers.push(new_answer);

    else {
      this.course.quiz.questions[position].answers = []
      this.course.quiz.questions[position].answers.push(new_answer);
    }
  }

  /**
   * Removes a question from a set of questions
   * @param position
   */
  removeQuestion(position: number) {
    this.course.quiz.questions = this.course.quiz.questions.filter((elem, index) => index !== position);
  }

  /**
   * Remove an option from a question
   * @param question_position
   * @param option_position
   */
  removeOption(question_position: number, option_id: string) {
    this.course.quiz.questions[question_position].answers = this.course.quiz.questions[question_position].answers.filter((elem) => elem.id !== option_id);
  }


  /**
   * Update Question as either multiple choice or not
   * @param question_position
   * @param event
   */
  updateMultipleChoice(question_position: number, event) {
    // this.createCourse.course.curriculum[this.section_position].lessons[this.lesson_position].quiz.questions[question_position].multiple_correct_answers = event;

    this.resetSelectedOptions(question_position);
  }


  /**
   * Tick set of options or answers as the correct answers
   * @param question_position
   * @param option_position
   * @param ticked
   *
   * @description Ticks an option as selected by populating it in the correct answers array
   * TODO: Ticking options fails to bind to data. Manually bind options and investigate
   */
  tickSelectedOption(question_position: number, option_id: string, ticked: boolean) {


    // Verify if the Selected type is a multiple choice or checkbox
    if (this.course.quiz.questions[question_position].question_type === MULTIPLE_CHOICETYPE) {
      // reset selected options
      this.resetSelectedOptions(question_position);
      console.log("Reset all")
    }


    if (ticked) {
      console.log("Option selected as corret answer");

      //TODO : Fix or Rewrite this - Loop through the answers and set them manually
      this.course.quiz.questions[question_position].answers.forEach((data: Options) => {
        if (data.id === option_id) data.ticked = true;
      });

      // get the answer
      const answer = this.course.quiz.questions[question_position].answers.reduce((previous, current,) => {
        if (current.id === option_id) {
          current.ticked = true;
          return current
        }
        else return previous
      });

      // make a new answer without the model
      const new_answer = new QuestionAnswer(answer.id, answer.answer);

      // verify if its not null
      if (!this.course.quiz.questions[question_position].correct_answers)
        this.course.quiz.questions[question_position].correct_answers = []

      //TODO : Bad if input changes Push the correct answer
      this.course.quiz.questions[question_position].correct_answers.push(new_answer)

      // TODO : Fix this, should be binded in the model
      // Go through the answers and manually tick the selected option
    }
    else {
      // Remove from correct answers
      console.log("Option selected as incorret answer")
      this.course.quiz.questions[question_position].correct_answers = this.course.quiz.questions[question_position].correct_answers.filter((elem) => elem.id !== option_id)
    }

    console.log(this.course.quiz.questions[question_position]);


  }

  /**
   * Reset Options / answers for a particular question
   * @param question_position
   */
  resetSelectedOptions(question_position: number,) {

    // Fail safe
    if (this.course.quiz.questions[question_position].answers) {
      this.course.quiz.questions[question_position].answers.forEach((data: Options) => {

        data.ticked = false;
        return data;
      });

      this.resetCorrectAnswersList(question_position);
    }
  }


  /**
   * Reset all the Correct Answers array
   * @param question_position
   */
  resetCorrectAnswersList(question_position: number) {
    this.course.quiz.questions[question_position].correct_answers = [];
  }


}
