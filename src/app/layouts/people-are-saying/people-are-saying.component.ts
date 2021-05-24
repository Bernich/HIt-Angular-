import { Component, Input, OnInit, HostListener } from '@angular/core';
import { IPost } from '../../shared/model/post.model';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-jhi-people-are-saying-list',
  templateUrl: './people-are-saying.component.html',
  styleUrls: ['./people-are-saying.component.css'],
})
export class PeopleAreSayingComponent implements OnInit {



  news = [
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/hive-news-c7f94.appspot.com/o/posts%2Fthumb_5c7531e24e32130004bc6dbe?alt=media&token=6ff2d00f-b7cf-48d8-bd55-6bd8fe2b07f8',
      title: 'A Better World for All: Kumasi Hive Contributes to Achieving the Sustainable Development Goals      ',
      description: 'The popular A.R.T. Travels events will continue as a virtual series this spring, but the theater is making preparations for some upcoming, in-person performances. And it has some pertinent pandemic-era experience under its belt.'
    },
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/hive-news-c7f94.appspot.com/o/posts%2Fthumb_5c891dfd33e64000046db150?alt=media&token=33a585e3-3b8c-4bcd-a08c-4bb843199878',
      title: 'Edukits: Merging 3D Printing and Education',
      description: 'The Bridge the Gap training program is an ongoing initiative that was started by Kumasi Hive in partnership with GIZ (Deutsche Gesellschaft für Internationale Zusammenarbeit), Innovation Factory and eskills for Girls.'

    },
    {
      description: 'Bridge the Gap, an initiative of the Ghana-based company Kumasi Hive, won the Leadership in SMEs category (Leadership II) award at the 2019 EQUALS in Tech Awards at the 2019 Internet Governance Forum in Berlin, Germany',
      title: 'Kumasi Hive Recognised in Berlin for Empowering Female Tech Entrepreneurs',
      image: 'https://firebasestorage.googleapis.com/v0/b/hive-news-c7f94.appspot.com/o/posts%2Fthumb_post_1576937167380?alt=media&token=3a52b8e8-526d-4e9e-a846-74e4c77218bf'

    }
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
