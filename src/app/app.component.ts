import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _titleService: Title
  ) { }

  ngOnInit(): void {
    this._router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .pipe(map(() => this._activatedRoute)) // will be treated as route next line
      .pipe(map(route => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }))
      .pipe(switchMap(route => route.data))
      .subscribe(event => this._titleService.setTitle(event.title));
  }
}