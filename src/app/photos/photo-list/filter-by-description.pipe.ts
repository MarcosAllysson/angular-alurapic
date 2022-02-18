import { Pipe, PipeTransform } from "@angular/core";
import { Photo } from "../photo/Iphoto";

@Pipe({
    name: 'filterByDescription'
})

export class FilterByDescription implements PipeTransform {

    transform(photos: Photo[], descriptionQuery: string) {
        descriptionQuery = descriptionQuery
            .trim()
            .toLowerCase();

        if (descriptionQuery) {
            return photos.filter(photo =>
                photo.occupation.toString().toLowerCase().includes(descriptionQuery)
            );
        } else {
            return photos;
        }
    }
}