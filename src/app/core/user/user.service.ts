import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import jwtDecode, * as jwt_decode from 'jwt-decode';

import { TokenService } from "../token/token.service";
import { IUser } from "./IUser";

@Injectable({ providedIn: 'root' })
export class UserService {

    private userSubject = new BehaviorSubject<IUser>(null);
    private username: string = "";

    constructor(private tokenService: TokenService) {
        // checking if there is a token
        this.tokenService.hasToken() && this.decodeAndNotify();
    }

    setToken(token: string) {
        this.tokenService.setToken(token);
        this.decodeAndNotify();
    }

    getUser() {
        // who invokes it, can do subscribe.
        return this.userSubject.asObservable();
    }

    private decodeAndNotify() {
        const token = this.tokenService.getToken();

        // decoding token and transforming to User type
        const user = jwtDecode(token) as IUser;

        //getting username
        this.username = user.name;

        this.userSubject.next(user);
    }

    logout() {
        this.tokenService.removeToken();
        this.userSubject.next(null);
    }

    isLoggedIn(): boolean {
        return this.tokenService.hasToken();
    }

    getUsername(): string {
        return this.username;
    }
}