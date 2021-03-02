import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  headerTitle: string;
  headerSubTitle: string;

  constructor() { }

  ngOnInit(): void {
    this.headerTitle = 'Great products come by doing';
    this.headerSubTitle = 'Subtitlul aici Great products come by doing Great products come by doing Great products come by doing';
  }

}
