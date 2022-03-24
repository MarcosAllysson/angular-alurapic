import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isShown: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.isShown = !this.isShown;
  }

}
