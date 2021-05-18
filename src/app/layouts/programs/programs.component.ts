import { Component, Input, OnInit, HostListener } from '@angular/core';
import { IPost } from '../../shared/model/post.model';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-jhi-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css'],
})
export class ProgramsComponent implements OnInit {



  programs = [
    {
      image: 'https://engineering.stanford.edu/sites/default/files/styles/full_width_banner_tall/public/20210512-niac-pavone_graphic_2021_ph_i.jpg?itok=MB7dg5cJ',
      title: 'Modern Computer Science'
    },
    {
      image: 'https://engineering.stanford.edu/sites/default/files/styles/full_width_banner_tall/public/20210423-tfoe-agrawala-adobestock_361542557.jpg?itok=306hNN2c',
      title: 'Business Management Essential'
    },
    {
      image: 'https://engineering.stanford.edu/sites/default/files/styles/6-col-banner-short/public/20210422-floodwaters-istock-1199361013.jpg?itok=5aKHBou5',
      title: 'Modern app development with Flutter'
    },
  ]
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
