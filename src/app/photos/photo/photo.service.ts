import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Photo } from "./Iphoto";

const url: string = "https://www.breakingbadapi.com/api/characters?limit=12";
const url_two: string = "https://jsonplaceholder.typicode.com/photos";

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
}