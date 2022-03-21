import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { PhotoModule } from "../photo/photo.module";
import { PhotoFormComponent } from "./photo-form.component";
import { ImmediateClickModule } from "src/app/shared/directives/immediate-click/immediateClick.module";
import { ValidatorMessageModule } from "src/app/shared/components/validator-message/validator-message.module";

@NgModule({
    declarations: [
        PhotoFormComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ValidatorMessageModule,
        PhotoModule,
        ImmediateClickModule
    ]
})
export class PhotoFormModule { }