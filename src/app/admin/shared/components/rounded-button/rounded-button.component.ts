import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rounded-button',
  templateUrl: './rounded-button.component.html',
  styleUrls: ['./rounded-button.component.css']
})
export class RoundedButtonComponent implements OnInit {

  constructor() { }

  @Output() triggerClick = new EventEmitter();
  @Input() text: string;

  ngOnInit() {
  }


  triggerEventClick() {
    this.triggerClick.emit();
  }
}
