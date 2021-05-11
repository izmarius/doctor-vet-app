import { PARTICLE_OPTIONS } from './../../../shared-data/ParticlesJS';
import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HEADER_TEXT} from '../../../shared-data/Constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  headerText;

  constructor() {
  }

  id = 'tsparticles';
  particleOptions = PARTICLE_OPTIONS;
  @ViewChild('particleElem') particleElem: ElementRef;

  ngOnInit(): void {
    this.headerText = HEADER_TEXT;
  }

}
