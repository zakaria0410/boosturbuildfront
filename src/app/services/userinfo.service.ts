import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Userinfo } from '../models/userinfo';
import { LoginService } from '../service/login.service';

@Injectable({
  providedIn: 'root'
})
export class UserinfoService {
  private apiUrl ='http://localhost:8180/auth/realms/Boosturbuild/protocol/openid-connect/userinfo'; 


  constructor(private loginservice:LoginService,
    private httpClient:HttpClient) { }
tocken():string{
  return this.loginservice.tocken();
}
public detail(): Observable<Userinfo> {

  const headers = new Headers({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.tocken()}`,'Access-Control-Allow-Origin':'*'
  })


  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' ,
    'Authorization': `Bearer ${this.tocken()}`})
  };
  return this.httpClient.get<Userinfo>(this.apiUrl , httpOptions);
}


}
