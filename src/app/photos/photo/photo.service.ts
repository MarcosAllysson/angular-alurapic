import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

import { Photo } from "./Iphoto";
import { IPhoto } from "../photo-form/IPhoto";

const url: string = "https://www.breakingbadapi.com/api/characters?limit=12";
const url_two: string = "https://jsonplaceholder.typicode.com/photos";
const fake_api_path: string = "http://localhost:5000/";

@Injectable({ providedIn: 'root' })
export class PhotoService {

    constructor(private http: HttpClient) { }

    listPhotosFromApi(): Observable<Photo[]> {
        return this.http.get<Photo[]>(url);
    }

    listPhotosFromApiPaginated(userName: string, page: number): Observable<Photo[]> {
        const params = new HttpParams().append('page', page.toString());
        return this.http.get<Photo[]>(`${url}/${userName}`, { params });
    }

    upload(photoForm: IPhoto) {
        alert(`Uploaded:\n${photoForm.description} \n${photoForm.file}`);
        // return this.http.post<IPhoto>(`${fake_api_path}/upload`, photoForm);
    }
}