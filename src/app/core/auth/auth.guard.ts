import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";

import { UserService } from "../user/user.service";

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

    constructor(
        private userService: UserService,
        private router: Router
    ) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

        //is user is not logged in, it can activate this route
        if (!this.userService.isLoggedIn()) {
            this.router.navigate(
                [''],
                {
                    queryParams: {
                        fromUrl: state.url
                    }
                }
            );
            return false;
        }

        return true;
    }
}