import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-flash',
    templateUrl: './flash.component.html',
    styleUrls: ['./flash.component.css']
})
export class FlashComponent implements OnInit {
    @Input() alertMessage: string;
    @Input() alertCategory: string;

    constructor() {}

    ngOnInit() {}
}
