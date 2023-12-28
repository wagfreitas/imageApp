import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExamesService {

 // private apiUrl = environment.apiUrl
  private apiUrl = 'https://us-central1-sistatend-ae6a9.cloudfunctions.net/app'

  constructor(
    private http: HttpClient) { }
  private data = [];

  setData(data: any) {
    this.data = data;
  }

  getData() {
    return this.data;
  }


  public getAllExames(): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/readallexames`)

  }

  public getAllLaudos(): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/readallexameslaudados`)

  }

  public createLaudoExames(arrDados: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/createlaudos`, arrDados)
  }

  public updateExamesMarcados(id: string, dados: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/api/upexames/${id}`, dados)
  }

  public deleteExamesMarcados(id: string ): Observable<any> {
    return this.http.delete(`${this.apiUrl}/api/delexames/${id}`)
  }



}
