import { Component, Input, OnInit, HostListener } from '@angular/core';
import { IPost } from '../../shared/model/post.model';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-jhi-image-text-card',
  templateUrl: './image-text-card.component.html',
  styleUrls: ['./image-text-card.component.css'],
})
export class ImageTextCardComponent implements OnInit {

  @Input() title: string;

  @Input() url: string;
  @Input() description: string;
  @Input() reversed: boolean = false;
  @Input() background: boolean = false;

  ngOnInit() { }


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
