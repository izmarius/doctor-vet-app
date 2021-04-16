import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleSectionImageComponent } from './article-section-image.component';

describe('ArticleSectionImageComponent', () => {
  let component: ArticleSectionImageComponent;
  let fixture: ComponentFixture<ArticleSectionImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleSectionImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleSectionImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
