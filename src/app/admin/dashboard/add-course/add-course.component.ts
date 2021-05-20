import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { CreateCourse, CreateLesson, CreateSection, FileData, IInstructor, ILesson, Resource } from '../../shared/models';
import { InstructorService, CreatePostService } from '../../shared/services';
import { CoursesBottomSheetComponent } from './add-course-bottomsheet.component';
import { v4 as uuidv4 } from 'uuid';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-hive-admin-add-news-page',
  templateUrl: './add-course.component.html',
  styleUrls: [
    './add-course.component.css',
    'add-course-section.css',
    'add-course-module.css',
    'add-course-main.css'
  ],
  providers: [CreatePostService]
})
export class HiveAdminAddCourseComponent implements OnInit {

  imgUrl = 'https://hive-news.uc.r.appspot.com/republica.830aacc59b16116965b4.jpg';
  publish: false = false;
  categoryControl = new FormControl('', Validators.required);


  isLoading = false;
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
  stateTabs = {
    createCourse: true,
    curriculumTab: false
  };

  course: CreateCourse = null;


  constructor(
    private route: ActivatedRoute,
    private bottomSheet: MatBottomSheet,
    private instructorService: InstructorService
  ) { }

  ngOnInit(): void {
    // load all authors
    this.loadAllAuthors();


    // Check url if there is a course id else create a new course
    const id = this.route.snapshot.paramMap.get('slug');
    if (id) {
      // unpack old course
      // this.course = unpack
    } else {
      // Create a new course
      this.course = new CreateCourse()
    }
  }



  saveCourse() {
    console.log(this.course);

    this.isLoading = true;
    // convert post authors into an id
    const author_ids = this.getCourseInstructos();
    console.log(author_ids);

    // this.courseService.savePost(this.categoryControl.value, author_ids).subscribe({
    //   next: (data: any) => {
    //     console.log(data); this.isLoading = false;
    //   },
    //   error: (err: any) => {
    //     console.log(err); this.isLoading = false;
    //   }
    // });
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
    this.isLoading = true;

    this.instructorService.all().subscribe({
      next: (data: any) => {

        this.isLoading = false;
        this.instructors = data;
      },

      error: (error) => {
        this.isLoading = false;
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
        this.course.thumbnail_data = event.target.result.substr(event.target.result.indexOf('base64,') + 'base64,'.length);
      }

    });

  }

  removeUser(instructor: IInstructor) {
    this.selectedInstructors = this.selectedInstructors.filter((user: IInstructor) => instructor.instructor_id !== user.instructor_id);
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
    // this.course.career_path = data.map((data: Resource) => data.value);
    this.course.career_path = data;
  }


  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'Mins';
    }
    return value;
  }
}
