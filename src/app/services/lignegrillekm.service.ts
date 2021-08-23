import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LignegrillekmService {
  apiUrl ='http://localhost:8080/api/tarif/';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json','Access-Control-Allow-Origin':'*' })
  };
  constructor(private httpClient:HttpClient) { }

  public create(ci: any): Observable<any> {
    return this.httpClient.post<any>(this.apiUrl + 'newLGrille', ci, this.httpOptions);
  }


  public update(ci: any): Observable<any> {
    return this.httpClient.put<any>(this.apiUrl + 'updateUnit', ci, this.httpOptions);
  }

  public delete(id:number): Observable<any> {
    return this.httpClient.delete<any>(this.apiUrl + 'delete/'+id, this.httpOptions);
  }

  public list(id:number): Observable<any> {
    return this.httpClient.get<any>(this.apiUrl + 'listLg/'+id, this.httpOptions);
  }
}
