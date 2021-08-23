import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterventionmecaniqueService {
  typerepara="InterventionPanne"
  typemaintenance="InterventionMaintenance"
  apiUrl ='http://localhost:8080/api/intervention/';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json','Access-Control-Allow-Origin':'*' })
  };
  constructor(private httpClient:HttpClient) { }

  public create(ci: any,type:string): Observable<any> {
    return this.httpClient.post<any>(this.apiUrl + 'new/'+type, ci, this.httpOptions);
  }
  public getInt(id: number,type:string): Observable<any> {
    return this.httpClient.get<any>(this.apiUrl + 'get/'+type+'/'+id, this.httpOptions);
  }

  
}
