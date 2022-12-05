import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/components/cliente/menu/usuario';
import { UsuarioService } from 'src/app/components/cliente/menu/usuario.service';
import { Login } from './login';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginservice:LoginService, private usuarioService : UsuarioService, private router:Router) {}

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

  usuario : Usuario = {
    nroUsuario : 0,
    nombre : "",
    apellido : "",
    tipoUser : ""
  }

  

  users:string ="";
  pass:string ="";

  accesoLogin()
  {
    //console.log("user: "+this.users)
    //console.log("password: "+this.pass)
    this.users = this.users.trim();
    this.pass = this.pass.trim();
    if (this.users == "" || this.pass == "") return;
    
    this.loginservice.getLogin(this.users, this.pass).subscribe(user=>
    {
      if (user != null)
      {
        if (user.tipoUser != undefined) this.usuario.tipoUser = user.tipoUser?.toUpperCase() //"USUARIO"
        if (user.idLogin != null)
        {
            this.usuarioService.traerLogin(user.idLogin).subscribe(usu => 
              {
                if (usu != null)
                {
                  this.usuario.nroUsuario = usu.nroUsuario;
                  this.usuario.nombre = usu.nombre;
                  this.usuario.apellido = usu.apellido;
                  console.log(this.usuario.tipoUser)
                  this.grabarLocalStorage(this.usuario)
                }
              });
          }
      }
    });
  }

  registrarLogin()
  {
    this.loginservice.guardarLogin(this.login).subscribe(respuesta=>
      {
        console.log(respuesta);
      })
  }

  grabarLocalStorage(datos : any)
  {
    localStorage.setItem("datos", JSON.stringify(datos));
    if (datos.tipoUser == "USUARIO") this.router.navigate(['']);
    else if (datos.tipoUser == "EMPLEADO") this.router.navigate(['/admin']);
  }
}
