import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Local } from './local';

@Injectable({
  providedIn: 'root'
})
export class LocalService 
{
  private urlEndPoint:string = "http://localhost:8080";

  private httpHeaders = new HttpHeaders({'Content Type' : 'application/json'});

  constructor(private http:HttpClient) { }

  traerLocal() : Observable<Local[]>
  {
    return this.http.get<Local[]>(this.urlEndPoint + '/local/listar');
  }
}
