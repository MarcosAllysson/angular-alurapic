import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImmediateClickDirective } from './immediateClick.directive';

@NgModule({
  declarations: [
    ImmediateClickDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ImmediateClickDirective
  ]
})
export class ImmediateClickModule { }
