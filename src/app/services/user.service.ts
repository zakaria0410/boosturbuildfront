import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl ='http://localhost:8080/api/user/'; 
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'
     ,'Access-Control-Allow-Origin':'*'})
  };
  constructor(private httpClient: HttpClient) { }

  public list(): Observable<any> {
    return this.httpClient.get(this.apiUrl + 'list', this.httpOptions);
  }
  public user(id:string): Observable<any> {
    return this.httpClient.get(this.apiUrl +`detailUser/${id}`, this.httpOptions);
  }


  public add(u:User):Observable<any>{
return this.httpClient.post(this.apiUrl+'new',u,this.httpOptions)
  }
  public update(foo: User): Observable<any> {
    return this.httpClient.put<any>(this.apiUrl + `updateUser`, foo, this.httpOptions);
  }
}
