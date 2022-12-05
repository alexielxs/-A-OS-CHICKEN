import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-cliente',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponents implements OnInit 
{

  constructor() { this.obtenerLocalStorage() }

  ngOnInit(): void {
  }

  nombre : string = "INICIAR SESION";

  obtenerLocalStorage()
  {
    let data = localStorage.getItem("datos");
    if (data != null)
    {
      let obj = JSON.parse(data);
      if (obj.tipoUser == "USUARIO") this.nombre = obj.nombre;
    }

    
  }
}
