import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  @Input() cardPlaceholder;
  @Input() cardData: ICardData;
  @Input() buttonId: string | number;

  constructor() {
  }

  ngOnInit(): void {
  }
}

export interface ICardData {
   title: string;
   buttonId: string | number;
   values: string[];
}
