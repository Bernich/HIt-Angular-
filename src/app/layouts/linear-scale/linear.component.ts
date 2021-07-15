import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-linear-scale',
  templateUrl: './linear.component.html',
  styleUrls: ['./linear.component.css'],
})
export class LinearScaleComponent implements OnInit {
  @Input() min: string;
  @Input() max: string;

  @Input() min_label: string = 'Good';
  @Input() max_label: string = 'Bad';
  @Output() valueChange = new EventEmitter();

  num_of_fields = 0;
  currentValue = 0;
  radioValues: {
    name: string;
    value: string;
  }[] = [];

  ngOnInit() {
    this.num_of_fields = parseInt(this.max) - parseInt(this.min);

    for (let i = 0; i < this.num_of_fields; i++) {
      const num = i + parseInt(this.min);
      this.radioValues.push({
        name: num.toString(),
        value: num.toString(),
      });
    }
  }

  sendSelected(log) {
    this.valueChange.emit(log);
  }
}
