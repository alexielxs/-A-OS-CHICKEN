import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carta } from './carta';

@Injectable({
  providedIn: 'root'
})
export class CartaService 
{
  private urlEntPoint:string = "http://localhost:8080/carta";
  
  private httpHeaders = new HttpHeaders({'Content Type' : 'application/json'});

  constructor(private http:HttpClient) { }

  traerCartas() : Observable<Carta[]>
  {
    return this.http.get<any>(this.urlEntPoint+`/listar`);
  }
}
