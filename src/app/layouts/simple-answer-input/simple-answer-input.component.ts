import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-simple-answer-input',
  templateUrl: './simple-answer-input.component.html',
  styleUrls: ['./simple-answer-input.component.css']
})
export class SimpleAnswerInputComponent implements OnInit {


  @Output() valueChange = new EventEmitter();


  ngOnInit() {


  }


  emitValue(logg) {
    this.valueChange.emit(logg);
  }
}
