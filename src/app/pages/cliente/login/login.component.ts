import { Component, OnInit } from '@angular/core';
import { Login } from './login';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginservice:LoginService) {}

  ngOnInit(): void {
  }

  /*
   * Paramenter -> Tipo
   * 0 : Login
   * 1 : Registro
  */

  animacion(tipo : any)
  {
    let x = document.getElementById("login")
    let y = document.getElementById("registrar")
    let z = document.getElementById("elegir")
    
  
    if (x != null && y != null && z != null)
    {

      x.style.left = tipo == 0 ? "50px" : "-400px";
      y.style.left = tipo == 0 ? "450px" : "50px";
      z.style.left = tipo == 0 ? "0px" : "120px";
    
    } 
  }

  login:Login={
    "password":"",
    "user":"",
    "tipoUser": "USUARIO"
  }
  users:string ="";
  pass:string ="";

  accesoLogin()
  {
    console.log("user: "+this.users)
    console.log("password: "+this.pass)
    
    this.loginservice.getLogin(this.users, this.pass).subscribe(user=>{
      console.log(user);
    });
  }

  registrarLogin()
  {
    this.loginservice.guardarLogin(this.login).subscribe(respuesta=>
      {
        console.log(respuesta);
      })
  }
}
