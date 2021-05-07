import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  cardText = {
    photo: '../../../assets/photos/svg.svg',
    title: 'Notifications',
    text: 'Assign owners to conversations, and delegate to team members to follow every update.'
  };
  constructor() { }

  ngOnInit(): void {
  }

}