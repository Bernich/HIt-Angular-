import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video-dialog',
  templateUrl: './video-dialog.component.html',
  styleUrls: ['./video-dialog.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class VideoDialogComponent implements OnInit {
  @ViewChild('target', { static: true }) target: ElementRef;

  videoUrl;

  constructor(
    private sanitizer: DomSanitizer,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.data.url
    );
  }

  ngOnInit() {}
}
