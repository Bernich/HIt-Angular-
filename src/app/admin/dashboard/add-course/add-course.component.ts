import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Course, CreateCourse, CreateLesson, CreateSection, FileData, ICourse, IInstructor, ILesson, Resource } from '../../shared/models';
import {
  AuthService,
  InstructorService,
  CreatePostService,
  CourseService,
  NavigationService
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

  imgUrl = 'https://hive-news.uc.r.appspot.com/republica.830aacc59b16116965b4.jpg';
  publish: false = false;
  categoryControl = new FormControl('', Validators.required);


  isNewCourse = true; /**Check if a course is new */

  isLoading = {
    instructors: false,
    course: false,
    saving: false
  }

  instructors: IInstructor[] = [];
  selectedInstructors: IInstructor[] = [];

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
    private instructorService: InstructorService,
    private courseService: CourseService,
    private navigationService: NavigationService
  ) { }

  ngOnInit(): void {
    // load all authors
    this.loadAllAuthors();

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

        // reload course
        this.loadCourse(this.course.course_id);
      },
      error: (err) => { }
    });
  }

  loadCourse(id) {
    this.courseService.getCourse(id).subscribe({
      next: (data: Course) => {
        // unmap course into

        this.course = CourseMapper.convertToCreate(data);

        // setisNew to false
        this.isNewCourse = false;
      },
      error: (err: any) => { }
    })
  }

  save() {

    this.isLoading = { ...this.isLoading, saving: true };

    if (this.isNewCourse) {
      this.saveCourse()
    } else {
      this.updateCourse();
    }
  }

  updateCourse() {

  }

  saveCourse() {
    console.log(this.course);

    // convert post authors into an id
    this.course.instructors = this.getCourseInstructos();

    const new_course = CourseMapper.convertToDTO(this.course);

    this.courseService.add(new_course).subscribe({
      next: (data: ICourse) => {
        console.log(data);

        this.navigationService.navigateToEditCourse(data.course_id)
      },
      error: (err: any) => {
        console.log(err);
        this.isLoading = { ...this.isLoading, saving: false };
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


  getCourseInstructos(): string[] {
    return this.selectedInstructors.map((instructor: IInstructor) => {
      return instructor.instructor_id
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
