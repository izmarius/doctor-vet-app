import { Component, OnInit } from '@angular/core';
import {NAVBAR_TEXT} from '../../../shared-data/Constants';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navbarText;
  constructor() { }

  ngOnInit(): void {
    this.navbarText = NAVBAR_TEXT;
  }

}
