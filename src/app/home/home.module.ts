import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SignInComponent } from './signin/signin.component';
import { ValidatorMessageModule } from '../shared/components/validator-message/validator-message.module';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';
import { SignupService } from './signup/signup.service';

@NgModule({
    declarations: [
        SignInComponent,
        SignupComponent,
        HomeComponent
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        ValidatorMessageModule,
        RouterModule,
        HomeRoutingModule
    ],
    providers: [
        SignupService
    ]
})

export class HomeModule { }