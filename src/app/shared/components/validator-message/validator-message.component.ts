import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-validator-message',
    templateUrl: './validator-message.component.html'
})

export class ValidatorMessageComponent {

    @Input() text: string = "";
}