import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
@Input()isLogged!:boolean
@Output() menuButtonClick: EventEmitter<any> = new EventEmitter();

  constructor(private loginservice:LoginService) { }
logoff():void{
  this.loginservice.logout()
}
  ngOnInit(): void {
  }
  onMenuButtonClick(event: Event) {
    this.menuButtonClick.emit();
    event.preventDefault();
}
}
