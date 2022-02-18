import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-photo',
    templateUrl: 'photo.component.html',
    styleUrls: ['./photo.component.css']
})
export class PhotoComponent {
    @Input() description: string = "";
    @Input() name: string = "";
    @Input() nickname: string = "";
    @Input() birthday: any = "";
    @Input() url: string = "";
    @Input() alt: string = "";
}