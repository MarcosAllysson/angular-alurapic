import { NgModule } from "@angular/core";

import { PhotoModule } from "./photo/photo.module";
import { PhotoFormModule } from "./photo-form/photo-form.module";
import { PhotoListModule } from "./photo-list/photo-list.module";
import { PhotoDetailModule } from "./photo-detail/photo-detail.module";


@NgModule({
    imports: [
        PhotoModule,
        PhotoFormModule,
        PhotoListModule,
        PhotoDetailModule
    ]
})

export class PhotosModule { }