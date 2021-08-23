import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Centreinvestissement } from '../models/centreinvistissement';

@Injectable({
  providedIn: 'root'
})
export class CentreinvistissementService {

  private apiUrl ='http://localhost:8080/api/ci/'; 
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json','Access-Control-Allow-Origin':'*' })
  };
  constructor(private httpClient: HttpClient) { }

  public list(): Observable<any> {
    return this.httpClient.get(this.apiUrl + 'list', this.httpOptions);
  }
  public create(ci: Centreinvestissement): Observable<any> {
    return this.httpClient.post<any>(this.apiUrl + 'new', ci, this.httpOptions);
  }
  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.apiUrl + `delete/${id}`, this.httpOptions);
  }
  public detail(id: number): Observable<Centreinvestissement> {
    return this.httpClient.get<Centreinvestissement>(this.apiUrl + `get/${id}`, this.httpOptions);

  }
  public update(foo: Centreinvestissement): Observable<any> {
    return this.httpClient.put<any>(this.apiUrl + `updateCi`, foo, this.httpOptions);
  }
}
