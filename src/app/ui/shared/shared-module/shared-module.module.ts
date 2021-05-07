import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModuleComponent } from './shared-module.component';
import { SectionTitleSubtitleComponent } from '../section-title-subtitle/section-title-subtitle.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SharedModuleComponent, SectionTitleSubtitleComponent],
  exports: [SectionTitleSubtitleComponent]
})
export class SharedModuleModule { }
