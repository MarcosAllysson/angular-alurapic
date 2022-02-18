import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { INewUser } from "./INew-user";

const API_URL: string = 'http://localhost:3000';

// @Injectable({ providedIn: 'root' })
@Injectable()
export class SignupService {

    constructor(private http: HttpClient) { }

    checkUsernameTaken(username: string) {
        return this.http.get(`${API_URL}/user/exists/${username}`);
    }

    signup(newUser: INewUser) {
        return this.http.post(`${API_URL}/user/register`, newUser);
    }
}