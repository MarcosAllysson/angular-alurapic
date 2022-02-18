import { Injectable } from "@angular/core";
import { AbstractControl } from "@angular/forms";
import { debounceTime, switchMap, map, first } from "rxjs/operators";

import { SignupService } from "./signup.service";

// @Injectable({ providedIn: 'root' })
@Injectable()
export class UserNotTakenValidatorService {

    constructor(private signupService: SignupService) { }

    checkUsernameTaken() {
        return (control: AbstractControl) => {
            return control
                .valueChanges
                .pipe(debounceTime(300))
                .pipe(switchMap(username => {
                    return this.signupService.checkUsernameTaken(username);
                }))
                .pipe(map(isTaken => {
                    isTaken ? { usernameTaken: true } : null
                }))
                .pipe(first());
        }
    }
}