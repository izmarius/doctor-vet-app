import {Component, Input, OnInit} from '@angular/core';

export default interface IPhotoTitle {
  title?: string;
  subtitle?: string;
  photo?: string;
  style?: any;
}

@Component({
  selector: 'app-photo-text',
  templateUrl: './photo-text.component.html',
  styleUrls: ['./photo-text.component.scss']
})
export class PhotoTextComponent implements OnInit {
  @Input() data: IPhotoTitle;

  constructor() {
  }

  ngOnInit(): void {
  }

}
