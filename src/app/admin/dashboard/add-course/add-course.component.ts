import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { CreateLesson, CreateSection, FileData, IInstructor, ILesson } from '../../shared/models';
import { InstructorService, CreatePostService } from '../../shared/services';
import { CoursesBottomSheetComponent } from './add-course-bottomsheet.component';

@Component({
  selector: 'app-hive-admin-add-news-page',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css', 'add-course-section.css', 'add-course-module.css'],
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

  categories = [
    'IOT',
    'Event',
    'Funding Oppurtunities',
    'Podcast'
  ];

  stateTabs = {
    createCourse: true,
    curriculumTab: false
  };


  sections: CreateSection[] = [
    {
      title: "This is the first", lessons: [
        {
          id: '12345',
          content: "First Lesson"
        },
        {
          id: '1234512',
          content: "Second content"
        },
        {
          id: '12345122323',
          content: "Third Lesson"
        }
      ]
    }

  ];
  constructor(
    public postService: CreatePostService,
    private bottomSheet: MatBottomSheet,
    private instructorService: InstructorService
  ) { }

  ngOnInit(): void {
    // load all authors
    this.loadAllAuthors();


  }

  saveButton() {
    console.log(this.postService.post);
  }

  savePost() {

    this.isLoading = true;
    // convert post authors into an id
    const author_ids = this.getPostAuthors();
    console.log(author_ids);

    this.postService.savePost(this.categoryControl.value, author_ids).subscribe({
      next: (data: any) => {
        console.log(data); this.isLoading = false;
      },
      error: (err: any) => {
        console.log(err); this.isLoading = false;
      }
    });
  }


  updateBannerImage(data: { url: string, data: FileData }) {
    this.imgUrl = data.url;
    this.postService.post.header_image = data.data;
  }

  openBottomSheet() {
    // Remove all selected authors and send to bottomsheet

    // open sheet
    this.bottomSheet.open(CoursesBottomSheetComponent, {
      data: { instructors: this.instructors },
    });

    // subscribe to observable that emit event when bottom sheet closes
    this.bottomSheet._openedBottomSheetRef.afterDismissed().subscribe((data: any) => {

      // pick data from opened bottom sheet
      if (data.data) {
        this.selectedInstructors.push(data.data);
      }
    });
  }


  getPostAuthors(): string[] {
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


  addLesson(section_position, $event) {

    console.log(section_position);

    const lesson = new CreateLesson();
    this.sections[section_position].lessons.push(lesson);
  }

  deleteSection(section_id) {
    this.sections = this.sections.filter((section: CreateSection) => section.id !== section_id)
  }

  addSection($event) {
    const section = new CreateSection();
    this.sections.push(section);
  }

  dropSection(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.sections, event.previousIndex, event.currentIndex);
  }
}
