import { Component, OnInit, TemplateRef, HostListener, Input } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ACTIVE_LINKS } from 'src/app/shared';

@Component({
  selector: 'jhi-onsite-navbar',
  templateUrl: './onsite-navbar.component.html',
  styleUrls: ['./onsite-navbar.component.css']
})
export class OnsiteNavbarComponent implements OnInit {
  modalRef: BsModalRef;
  scrolled = false;

  config = {
    animated: true
  };


  @Input() activeRoute = "home";

  constructor(private modalService: BsModalService) { }

  ngOnInit() { }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.scrollY > 100) {
      this.scrolled = true;
    } else {
      this.scrolled = false;
    }
  }
}
