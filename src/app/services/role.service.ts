import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private apiUrl ='http://localhost:8080/api/user/'; 
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' ,'Access-Control-Allow-Origin':'*'})
  };
  constructor(private http:HttpClient) { }
  public list(): Observable<any> {
    return this.http.get(this.apiUrl + 'listRoles1', this.httpOptions);
  }
}
