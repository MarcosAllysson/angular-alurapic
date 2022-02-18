import { AbstractControl } from "@angular/forms";

// to access -> *ngIf="signupForm.get('password').errors?.lowerCase"
export function lowerCaseValidator(control: AbstractControl) {

    if (control.value.trim() && !/^[a-z0-9_\-]+$/.test(control.value)) {
        return {
            lowerCase: true
        }
    }

    return null;
}