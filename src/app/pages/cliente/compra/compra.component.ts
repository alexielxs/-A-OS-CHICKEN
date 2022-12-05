import { Component, OnInit } from '@angular/core';
import { CartaTwo } from '../carta/carta';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit 
{

  constructor() { this.llenarDatos(); }

  ngOnInit(): void {
  }

  listaCarta : CartaTwo[] = [];

  subtotal : number = 0;
  igv : number = 0;
  total : number = 0;

  llenarDatos()
  {
    let datos = localStorage.getItem("carrito");
    if (datos != null)
    {
      let listaDatos = JSON.parse(datos);
      this.listaCarta = listaDatos;
    }
    
    for(let i = 0; i<this.listaCarta.length; i++)
    {
      this.subtotal += this.listaCarta[i].precio * this.listaCarta[i].cantidad;
    }

    this.igv = this.subtotal * 0.18
    this.total = this.subtotal + this.igv
  }
}
