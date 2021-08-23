import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
@Input() isLogged!:boolean
@Input() active!:boolean
  constructor() { }

  ngOnInit(): void {
  }

}
