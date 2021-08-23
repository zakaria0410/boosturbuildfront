import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanentretienService {
  apiUrl ='http://localhost:8080/api/planen/';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json','Access-Control-Allow-Origin':'*' })
  };
  constructor(private httpClient:HttpClient) { }

  public create(ci: any,type:string): Observable<any> {
    return this.httpClient.post<any>(this.apiUrl + 'new'+type, ci, this.httpOptions);
  }


  public update(ci: any,type:string,id:number): Observable<any> {
    return this.httpClient.put<any>(this.apiUrl + 'up'+type+'/'+id, ci, this.httpOptions);
  }

  public delete(type:string,id:number): Observable<any> {
    return this.httpClient.delete<any>(this.apiUrl + 'delete'+type+'/'+id, this.httpOptions);
  }

  public list(idmm:number): Observable<any> {
    return this.httpClient.get<any>(this.apiUrl + 'list/'+idmm, this.httpOptions);
  }
}
