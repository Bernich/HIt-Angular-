import { Component, Input, OnInit } from '@angular/core';
import { IInstructor, IUser } from '../../shared/models';
import { InstructorService, NavigationService } from '../../shared/services';

@Component({
  selector: 'app-hivenews-admin-news-list-page',
  templateUrl: './instructors-list.component.html',
  styleUrls: ['./instructors-list.component.css']
})
export class HiveAdminInstructorListComponent implements OnInit {

  isLoading = false;
  instructors: IInstructor[];


  constructor(
    private instructorService: InstructorService,
    private navigationService: NavigationService
  ) { }


  ngOnInit(): void {
    this.loadAll();
  }

  editAuthor(author: IInstructor) {
    this.navigationService.editInstructor(author.instructor_id);
  }

  loadAll() {
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
}
