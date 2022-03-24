import { CommonModule } from "@angular/common";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";

import { LoadingComponent } from "./loading.component";
import { LoadingInterceptor } from "./loading.interceptor";
import { LoadingService } from "./loading.service";

@NgModule({
    declarations: [
        LoadingComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        LoadingComponent
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: LoadingInterceptor,
            multi: true
        },
        LoadingService
    ]
})
export class LoadingModule { }