import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

import { UserService } from '../user/user.service';

const API_URL = 'http://localhost:3000/user/login';
const USERNAME = 'user';
const PASSWORD = '123';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) { }

  authenticate(username: string, password: string): boolean {
    if (username == USERNAME && password == PASSWORD) {
      return true;
    } else {
      return false;
    }
  }

  authenticateAndSaveToken(username: string, password: string) {
    return this.http.post(
      `${API_URL}`,
      {
        username: username,
        password: password
      },
      { observe: 'response' }
    ).pipe(tap(res => {//resposta encaminha a quem fizer o subscribe
      const authToken = res.headers.get('x-access-token');

      //armazenando no localStorage
      // window.localStorage.setItem('authToken', authToken);

      //armazenando token com serviço
      this.userService.setToken(authToken);

      console.log(`User ${username} authenticated with token ${authToken}`);
    }));

  }
}
