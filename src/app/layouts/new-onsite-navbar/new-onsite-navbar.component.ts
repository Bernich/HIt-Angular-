import { Component, OnInit, TemplateRef, HostListener, Input } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ACTIVE_LINKS } from 'src/app/shared';

@Component({
  selector: 'app-new-onsite-navbar',
  templateUrl: './new-onsite-navbar.component.html',
  styleUrls: ['./new-onsite-navbar.component.css']
})
export class NewOnsiteNavbarComponent implements OnInit {
  modalRef: BsModalRef;
  scrolled = false;
  toggleIsActive = false;

  config = {
    animated: true
  };


  @Input() activeRoute = "home";

  constructor(private modalService: BsModalService) { }

  ngOnInit() { }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }
isActive() {
    this.toggleIsActive = !this.toggleIsActive
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
