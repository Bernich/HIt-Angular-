import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rounded-button',
  templateUrl: './rounded-button.component.html',
  styleUrls: ['./rounded-button.component.css']
})
export class RoundedButtonComponent implements OnInit {

  constructor() { }
  @Input() text: string;

  ngOnInit() {
  }

}
