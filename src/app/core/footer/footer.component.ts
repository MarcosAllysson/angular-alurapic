import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { IUser } from '../user/IUser';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  user$: Observable<IUser>;

  constructor(
    private _userService: UserService
  ) { }

  ngOnInit() {
    this.user$ = this._userService.getUser();
  }
}
