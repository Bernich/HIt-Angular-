import { Component, OnInit, TemplateRef, HostListener } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

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
