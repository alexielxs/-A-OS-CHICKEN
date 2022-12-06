import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService 
{
  private urlEntPoint : string = "http://localhost:8080/"
  
  constructor(private http:HttpClient) { }

  traerLogin(id : number) : Observable<Usuario>
  {
    return this.http.get<Usuario>(this.urlEntPoint + 'usuario/listar/idLogin/' + id)
  }

  traerTodo() : Observable<any>
  {
    return this.http.get<any>(this.urlEntPoint + 'usuario/listar')
  }
}
