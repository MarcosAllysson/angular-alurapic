import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";

import { AuthService } from "src/app/core/auth/auth.service";
import { PlatformDetectorService } from "src/app/core/platform/platform-detector.service";


@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html'
})

export class SignInComponent implements OnInit {

    fromUrl: string;
    loginForm: FormGroup;
    @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;

    constructor(
        private formBuilder: FormBuilder,
        private auth: AuthService,
        private router: Router,
        private platformDetectorService: PlatformDetectorService,
        private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit(): void {
        // pegando rota antes de autenticar
        this.activatedRoute.queryParams.subscribe(params => this.fromUrl = params.fromUrl);

        this.loginForm = this.formBuilder.group({
            userName: ['', Validators.required],
            password: ['', Validators.required]
        });

        this.platformDetectorService.isPlatformBrowser() && this.userNameInput.nativeElement.focus();
    }

    login() {
        // const username = this.loginForm.get('userName').setValue('user');
        // const password = this.loginForm.get('password').setValue('123');

        const username = 'user';
        const password = '123';

        // this.auth
        //     .authenticate(username, password)
        //     .subscribe(
        //         () => console.log('autenticated'),
        //         err => {
        //             alert('Error when authenticating...');
        //             this.resetForm();
        //         }
        //     );

        if (this.auth.authenticate(username, password)) {
            alert('authenticated');

            // it was declared on app.routing
            // this.router.navigateByUrl('listphotos');

            //another way
            this.router.navigate(['listphotos']);

            // direcionando pra rota anterior antes de estar autenticado, e passando pós login
            // if(this.fromUrl){
            //     this.router.navigateByUrl(this.fromUrl);
            // }else{
            //     this.router.navigate(['listphotos']);
            // }

        } else {
            alert('Error when authenticating...');
            this.resetForm();
            this.platformDetectorService.isPlatformBrowser() && this.userNameInput.nativeElement.focus();
        }
    }

    resetForm(): void {
        this.loginForm.reset();
    }
}