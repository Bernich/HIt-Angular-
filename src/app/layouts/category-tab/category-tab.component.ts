import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'jhi-category-tab',
  templateUrl: './category-tab.component.html',
  styleUrls: ['./category-tab.component.css']
})
export class CategoryTabComponent implements OnInit {
  @Output() tabSelected = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  onChange(event) {
    this.tabSelected.emit(event.heading);
  }
}
