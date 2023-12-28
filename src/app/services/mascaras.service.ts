import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MascarasService {

apiURL = 'https://us-central1-sistatend-ae6a9.cloudfunctions.net/app'

  constructor(private http:HttpClient) { }

  public getMascara(idmascara:string): Observable<any>{

    return this.http.get(`${this.apiURL}/api/getmascara/${idmascara}`)

  }
}
