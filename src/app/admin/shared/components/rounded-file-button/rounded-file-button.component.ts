import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FileData } from '../../models';

@Component({
  selector: 'app-rounded-file-button',
  templateUrl: './rounded-file-button.component.html',
  styleUrls: ['./rounded-file-button.component.css']
})
export class RoundedFileButtonComponent implements OnInit {

  constructor() { }
  @Input() text: string;
  @Output() receiveFile = new EventEmitter();

  ngOnInit() {
  }


  /**
   * Process an input file selected by the user.
   * Checks if the type is a BANNER or a THUMBNAIL
   * @param imageInput
   */
  processFile(imageInput) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.addEventListener('load', (event: any) => {


      const imgUrl = (event.target.result);
      const data = event.target.result.substr(event.target.result.indexOf('base64,') + 'base64,'.length);

      this.receiveFile.emit({ url: imgUrl, data: new FileData(file.type, data) })
    });

  }
}
