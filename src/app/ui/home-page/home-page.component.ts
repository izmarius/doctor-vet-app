import { Component, OnInit } from '@angular/core';
import {SCHEDULE_HEADER_TEXT} from "../../shared-data/Constants";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  data = {
    title: 'Manage project communications efficiently',
    subtitle: 'Shared Inbox',
    text: 'Shared inbox helps you stay on top of every update, question, request, and compliment that comes your way. It\'s the single source of truth for all your client communications.'
  };

  articleStepsData = {
    title: 'Why it\'s better than email:\n',
    text: [
      'Share or jump into any project conversation, without the CC/BCC dance.', 'Delegate communication to your team while keeping an eye on everything.',
      'Follow just a single thread per project, not hundreds of email messages'
    ],
    icon: 'icon-magic-wand',
    anchorText : 'Go to next page'
  };

  headerContent = {
    title: 'Share or jump into any project conversation, without the CC/BCC dance sation, without the CC/BCC dance conversation, without the CC/BCC dance sation, without the CC/BCC dance conversation, without the CC/BCC dance sation, without the CC/BCC dance',
    style: this.getHeaderStyle()
  };

  constructor() { }

  ngOnInit(): void {
  }

  getHeaderStyle(): any {
    return {
      headerContainer: {
        height: '300px',
        background: '#ffdc4d',
      },
      headerContent: {
        height: '180px'
      }
    };
  }

}
