import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnitemesureService {

  apiUrl ='http://localhost:8080/api/unitm/';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json','Access-Control-Allow-Origin':'*' })
  };
  constructor(private httpClient:HttpClient) { }

  public create(ci: any): Observable<any> {
    return this.httpClient.post<any>(this.apiUrl + 'new', ci, this.httpOptions);
  }


  public update(ci: any): Observable<any> {
    return this.httpClient.put<any>(this.apiUrl + 'updateUnit', ci, this.httpOptions);
  }

  public delete(id:number): Observable<any> {
    return this.httpClient.delete<any>(this.apiUrl + 'delete/'+id, this.httpOptions);
  }

  public list(): Observable<any> {
    return this.httpClient.get<any>(this.apiUrl + 'list', this.httpOptions);
  }
}
