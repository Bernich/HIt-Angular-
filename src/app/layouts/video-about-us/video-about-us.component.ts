import { Component, Input, OnInit, HostListener } from '@angular/core';
import { IPost } from '../../shared/model/post.model';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog } from '@angular/material/dialog';
import { VideoDialogComponent } from '../video-dialog/video-dialog.component';

@Component({
  selector: 'app-jhi-video-about-us',
  templateUrl: './video-about-us.component.html',
  styleUrls: ['./video-about-us.component.css'],
})
export class VideoAboutUsComponent implements OnInit {

  @Input() news: any;

  constructor(public dialog: MatDialog) {

  }
  ngOnInit() { }


  openDialog() {
    this.dialog.open(VideoDialogComponent, {
      data: {
        url: 'https://www.youtube.com/embed/IBaAwlsZzew'
      }
    });
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (window.innerWidth < 1024) {
      // this.navigation.showNavigationArrows = false;
      // this.navigation.showNavigationIndicators = false;
    } else {
      // this.navigation.showNavigationArrows = true;
      // this.navigation.showNavigationIndicators = true;
    }
  }
}
