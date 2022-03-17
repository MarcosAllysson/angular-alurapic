import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { PhotoFormComponent } from "./photo-form.component";
import { ValidatorMessageModule } from "src/app/shared/components/validator-message/validator-message.module";

@NgModule({
    declarations: [
        PhotoFormComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ValidatorMessageModule
    ]
})
export class PhotoFormModule { }