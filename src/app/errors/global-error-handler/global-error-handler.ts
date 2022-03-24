import { LocationStrategy, PathLocationStrategy } from "@angular/common";
import { ErrorHandler, Injectable, Injector } from "@angular/core";
import * as StackTrace from "stacktrace-js";
import { Router } from "@angular/router";

import { UserService } from "src/app/core/user/user.service";
import { ServerLogService } from "./server-log.service";

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

    constructor(
        private _injector: Injector
    ) { }

    handleError(error: any): void {
        const serverLog = this._injector.get(ServerLogService);
        const router = this._injector.get(Router);

        const userService = this._injector.get(UserService);
        const location = this._injector.get(LocationStrategy);
        const url = location instanceof PathLocationStrategy ? location.path() : '';
        const message = error.message ? error.message : error.toString();

        StackTrace
            .fromError(error)
            .then(stackFrames => {
                const stackAsString = stackFrames
                    .map(stackFrame => stackFrame.toString())
                    .join('\n->')

                // console.log(`Message: ${message}`);
                // console.log(`Stack string: ${stackAsString}`);
                // console.log(`Url: ${url}`);

                // mandar pro backend
                // console.log({ message, url, userName: userService, stack: stackAsString });
                serverLog.log({ message, url, userName: userService.getUsername(), stack: stackAsString }); //aplicar subscribe..
                console.log({ message, url, userName: userService.getUsername(), stack: stackAsString });

                //redireciona usuário:
                // if(environment.production) router.navigate(['/error']);
            })
    }
}