import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { startWith } from 'rxjs/operators';

import { LoadingType } from './loading-type';

@Injectable({ providedIn: 'root' })
export class LoadingService {
    /*
        - Usado pelo interceptor para iniciar e para o loader
    */

    loadingSubject: Subject<LoadingType> = new Subject<LoadingType>();

    constructor() { }

    getLoading() {
        return this.loadingSubject
            .asObservable()
            // valor default, stopped.
            .pipe(startWith(LoadingType.STOPPED));
    }

    start() {
        this.loadingSubject.next(LoadingType.LOADING);
    }

    stop() {
        this.loadingSubject.next(LoadingType.STOPPED);
    }
}
