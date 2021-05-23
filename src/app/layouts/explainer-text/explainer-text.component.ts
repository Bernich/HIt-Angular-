import { Component, Input, OnInit, HostListener } from '@angular/core';
import { IPost } from '../../shared/model/post.model';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-jhi-explainer-text',
  templateUrl: './explainer-text.component.html',
  styleUrls: ['./explainer-text.component.css', 'rounded-button.css'],
})
export class ExplainerTextComponent implements OnInit {

  @Input() alignLeft: boolean = false
  @Input() text: string = ""
  @Input() heading: string = ""
  @Input() footer: string = ""
  @Input() showHeading: boolean = false;
  @Input() showFooter: boolean = false;

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
