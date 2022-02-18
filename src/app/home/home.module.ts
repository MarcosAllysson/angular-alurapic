import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SignInComponent } from './signin/signin.component';
import { ValidatorMessageModule } from '../shared/components/validator-message/validator-message.module';
import { RouterModule } from '@angular/router';
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