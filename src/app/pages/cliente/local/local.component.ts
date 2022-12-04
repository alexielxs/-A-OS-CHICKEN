import { Component, OnInit } from '@angular/core';
import { Local } from './local';
import { LocalService } from './local.service';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css']
})
export class LocalComponent implements OnInit 
{

  data : Local[] = [];
  local : Local = {
    idLocal : 0,
    nombre : "",
    direccion : "",
    hora : "",
    telefono : "",
    rutaGoogleMaps : ""
  }

  

  constructor(private localService:LocalService) { this.traerDatos(); }

  ngOnInit(): void {
  }

  traerDatos()
  {
    this.localService.traerLocal().subscribe(lista => {
      this.data = lista
      
      if (this.data.length>=1) 
      {
        this.local.idLocal = this.data[0].idLocal
        this.cambioOpcion();
      }
    })
  }

  cambioOpcion()
  {
    for (let i = 0; i < this.data.length ;i++)
    {
      if (this.local.idLocal == this.data[i].idLocal)
      {
        //console.log("entro a la condicional")
        this.local.direccion = this.data[i].direccion;
        this.local.hora = this.data[i].hora;
        this.local.telefono = this.data[i].telefono;
        this.local.rutaGoogleMaps = this.data[i].rutaGoogleMaps == null ? "" : this.data[i].rutaGoogleMaps;
        //console.log(this.local.rutaGoogleMaps)
        this.myFunction(this.local.rutaGoogleMaps)
        break;
      }
    }
  }

  myFunction(ruta : string) {
    const iframe = document.getElementById("iframeruta") as HTMLInputElement
    iframe.src = ruta;
  }
}
