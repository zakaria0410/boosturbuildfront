import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categorieenginnroulant } from '../models/categorieenginnroulant';

@Injectable({
  providedIn: 'root'
})
export class CategorieenginnroulantService {

  apiUrl ='http://localhost:8080/api/catengin/'; 
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json','Access-Control-Allow-Origin':'*' })
  };
  constructor(private httpClient:HttpClient) { }

  public create(ci: Categorieenginnroulant): Observable<any> {
    return this.httpClient.post<any>(this.apiUrl + 'new', ci, this.httpOptions);
  }

  public upload(ci: number,file:File): Observable<any> {
    const formdata: FormData = new FormData();
      formdata.append('file', file);
    return this.httpClient.post<any>(this.apiUrl + `uploadTof/${ci}`,formdata, { observe: 'response'});
  }
  public list(): Observable<any> {
    return this.httpClient.get<any>(this.apiUrl + 'list', this.httpOptions);
  }
  public get(id:number): Observable<any> {
    return this.httpClient.get<any>(this.apiUrl + `get/${id}`, this.httpOptions);
  }
  uploadFile(file: File,c:Categorieenginnroulant): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const request = new HttpRequest('POST', `${this.apiUrl}/uploadTof/${c.idcategorieEngin}`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.httpClient.request(request);
  }
  public update(id:number,cat:Categorieenginnroulant): Observable<any> {
    return this.httpClient.put<any>(this.apiUrl + `update/${id}`,cat, this.httpOptions);
  }
  public delete(id:number): Observable<any> {
    return this.httpClient.delete<any>(this.apiUrl + `delete/${id}`, this.httpOptions);
  }
}
