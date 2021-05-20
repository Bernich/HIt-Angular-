import { Component, ElementRef, Inject, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
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
    // const fs = this.lesson.video.url.split('.');
    // const ss = fs[1].split('/');

    // this.videoUrl = `https://player.vimeo.com/video/${ss[1]}`;

    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.data.url);
  }


  ngOnInit() {


    // instantiate Video.js
    // this.player = videojs(this.target.nativeElement, this.options, function onPlayerReady() {

    // });




    // this.player.src({ type: 'video/mp4', src: this.lesson.url })

    // this.player.load()
    // this.player.play()

  }

  ngOnDestroy() {
    // destroy player
    // if (this.player) {
    //   this.player.dispose();
    // }
  }
}
