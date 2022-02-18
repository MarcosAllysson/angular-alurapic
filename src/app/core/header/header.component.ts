import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

import { IUser } from "../user/IUser";
import { UserService } from "../user/user.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    user$: Observable<IUser>;
    // user: IUser;

    constructor(
        private userService: UserService,
        private router: Router
    ) {
        this.user$ = userService.getUser();
        // this.user$.subscribe(user => this.user = user);
    }

    logout() {
        this.userService.logout();
        this.router.navigate(['']);
    }
}