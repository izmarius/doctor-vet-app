import {Component, Input, OnInit} from '@angular/core';
interface IArticleText {
  title: string;
  subtitle: string;
  text: string;
}
@Component({
  selector: 'app-article-section-text',
  templateUrl: './article-section-text.component.html',
  styleUrls: ['./article-section-text.component.scss']
})
export class ArticleSectionTextComponent implements OnInit {
  @Input() data: IArticleText;
  constructor() { }

  ngOnInit(): void {
  }

}
