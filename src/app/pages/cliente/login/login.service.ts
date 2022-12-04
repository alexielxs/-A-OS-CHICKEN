import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private urlEndPoint:string="http://localhost:8080/login"

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getLogin(user : string, pass : string) : Observable<Login>
  {
    return this.http.get<Login>(this.urlEndPoint+`/listar/${user}/${pass}`);
  }

  guardarLogin(loginp:Login) : Observable<any>
  {
    return this.http.post<any>(this.urlEndPoint+`/guardar`, loginp);
  }
}
