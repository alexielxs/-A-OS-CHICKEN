import { Component, OnInit } from '@angular/core';
import { Carta } from '../../cliente/carta/carta';
import { CartaService } from '../../cliente/carta/carta.service';

@Component({
  selector: 'app-platos',
  templateUrl: './platos.component.html',
  styleUrls: ['./platos.component.css']
})
export class PlatosComponent implements OnInit 
{

  constructor(private cartaService : CartaService) { this.llenarDatos() }

  ngOnInit(): void {
  }

  listacarta : Carta[] = [];

  llenarDatos()
  {
    this.cartaService.traerCartas().subscribe(list=>
      {
        this.listacarta = list;
      })
  }


}
