import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoModule } from '../photo/photo.module';
import { PhotoDetailComponent } from './photo-detail.component';

@NgModule({
  imports: [
    CommonModule,
    PhotoModule
  ],
  declarations: [
    PhotoDetailComponent
  ],
  exports: [
    PhotoDetailComponent
  ]
})
export class PhotoDetailModule { }
