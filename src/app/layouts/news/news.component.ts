import { Component, Input, OnInit, HostListener } from '@angular/core';
import { IPost } from '../../shared/model/post.model';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-jhi-news-list',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsListComponent implements OnInit {



  news = [
    {
      image: 'https://news.harvard.edu/wp-content/uploads/2021/05/ART_Jagged-Little-Pill_EE-2500-1200x800.jpg',
      title: 'A.R.T. maintains global collaborations, with technology and remote coordination',
      description: 'The popular A.R.T. Travels events will continue as a virtual series this spring, but the theater is making preparations for some upcoming, in-person performances. And it has some pertinent pandemic-era experience under its belt.'
    },
    {
      image: 'https://news.harvard.edu/wp-content/uploads/2021/05/iStock-1211101305-900x600.jpg',
      title: 'Why some die, some survive when equally ill from COVID-19',
      description: 'We were interested in asking whether we could identify mechanisms that might be contributing to death in COVID-19,” says MGH infectious disease expert Marcia Goldberg, who studies interactions between microbial pathogens and their hosts, and is senior author of the study. '

    },
    {
      description: 'A year later, the Gazette caught up with Waldo, Gordon McKay Professor of the Practice of Computer Science and the Paulson School’s chief technology officer, to see how it went.',
      title: 'High-speed internet at a crossroads',
      image: 'https://engineering.stanford.edu/sites/default/files/styles/full_width_banner_tall/public/20210312-tfoe-jurafsky-stocksy_txp556a7c75o01300_large_2512241.jpg?itok=iCkNp7ty'

    },
    {
      description: 'A year later, the Gazette caught up with Waldo, Gordon McKay Professor of the Practice of Computer Science and the Paulson School’s chief technology officer, to see how it went.',
      title: 'High-speed internet at a crossroads',
      image: 'https://engineering.stanford.edu/sites/default/files/styles/full_width_banner_tall/public/20210312-tfoe-jurafsky-stocksy_txp556a7c75o01300_large_2512241.jpg?itok=iCkNp7ty'

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
