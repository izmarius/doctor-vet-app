import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-upload-photo',
  templateUrl: './upload-photo.component.html',
  styleUrls: ['./upload-photo.component.scss']
})
export class UploadPhotoComponent implements OnInit {
  @ViewChild('uploadInput') uploadInput: ElementRef<HTMLElement>;
  @Output() fileEmitter: EventEmitter<string>;
  isUploaded: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  uploadFile(): void {
    this.uploadInput.nativeElement.click();
  }

  readFile(event): void {
    const reader = new FileReader();
    reader.readAsText(event.target.files[0]);
    reader.onloadend = () => {
      const photo = reader.result as string;
      this.isUploaded = true;
      this.fileEmitter.emit(photo);
      event.target.value = '';
    };
  }
}
