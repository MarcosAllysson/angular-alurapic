import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot,
    UrlTree
} from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

import { UserService } from "../user/user.service";

@Injectable({ providedIn: 'root' })
export class LoginGuard implements CanActivate {

    constructor(
        private userService: UserService,
        private router: Router
    ) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

        //is user is logged in, it can not activate this route
        if (this.userService.isLoggedIn()) {
            // const username = this.userService.getUsername();
            // this.router.navigate(['user', username]);

            this.router.navigate(['listphotos']);
            return false;
        }

        return true;
    }
}