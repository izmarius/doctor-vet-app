import {Component, Input, OnInit} from '@angular/core';
interface ITextCardData {
  photo: string;
  title: string;
  text: string;
}
@Component({
  selector: 'app-text-card',
  templateUrl: './text-card.component.html',
  styleUrls: ['./text-card.component.scss']
})
export class TextCardComponent implements OnInit {

  @Input() cardData: ITextCardData;
  constructor() { }

  ngOnInit(): void {
  }

}
