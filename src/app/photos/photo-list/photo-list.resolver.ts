import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

import { Photo } from "../photo/Iphoto";
import { PhotoService } from "../photo/photo.service";

@Injectable({ providedIn: 'root' })
export class PhotoListResolver implements Resolve<Observable<Photo[]>>{
    constructor(private _photoService: PhotoService) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<Photo[]> | Observable<Observable<Photo[]>> | Promise<Observable<Photo[]>> {
        // const userName = route.params.userName;

        return this._photoService.listPhotosFromApi();
        // return this._photoService.listPhotosFromApiPaginated(userName, 1);
    }
}