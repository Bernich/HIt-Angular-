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


@Component({
  selector: 'app-hive-admin-add-news-page',
  templateUrl: './add-course.component.html',
  styleUrls: [
    './add-course.component.css',
    'add-course-section.css',
    'add-course-module.css',
    'add-course-main.css',
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

  /**Toggle between the tabs in the course state */
  stateTabs = {
    createCourse: true,
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
        // unmap course into

        this.isLoading = { ...this.isLoading, course: false };


        this.course = CourseMapper.convertToCreate(data);
        this.isPublished = data.is_approved;
        // setisNew to false
        this.isNewCourse = false;

        // store current thumbnail and banner
        this.thumbnailURL = data.thumbnail.url;
        this.imgUrl = data.banner.url;

        //put instructors in selected instructors
        this.selectedInstructors = data.instructors;
        this.selectedDevelopers = this.convertToDeveloperToInstructorModel(data.developers);
        console.log(this.selectedDevelopers)
      },
      error: (err: any) => {
        this.isLoading = { ...this.isLoading, course: false };

      }
    })
  }


  convertToDeveloperToInstructorModel(devs: any) {
    const developers = []

    for (const item of devs) {
      const new_dev = {
        firstname: item.fullname,
        lastname: "",
        profile_pic: {
          url: item.image_url
        },
        id: item.id
      }

      developers.push(new_dev)
    }


    return developers;
  }

  loadDevelopers() {
    this.usersService.all("users").subscribe({
      next: (data: any) => {
        this.developers = data;
      }
    });
  }

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
      createCourse: false
    };
  }

  switchToEditCourseTab() {
    this.stateTabs = {
      ...this.stateTabs,
      curriculumTab: false,
      createCourse: true
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

  removeLesson(section_position, id) {
    this.course.curriculum[section_position].lessons = this.course.curriculum[section_position].lessons.filter((lesson: CreateLesson) => lesson.id !== id)
  }
  addLesson(section_position, $event) {
    const lesson = new CreateLesson(this.course.course_id);
    this.course.curriculum[section_position].lessons.push(lesson);

  }

  deleteSection(section_id) {
    this.course.curriculum = this.course.curriculum.filter((section: CreateSection) => section.id !== section_id)
  }

  addSection($event) {
    const section = new CreateSection(this.course.course_id);
    this.course.curriculum.push(section);
  }

  dropSection(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.course.curriculum, event.previousIndex, event.currentIndex);
  }

  updateObjective(data: Resource[]) {
    this.course.what_you_will_learn = data;
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
}
