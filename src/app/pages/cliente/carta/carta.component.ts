import { Component, OnInit } from '@angular/core';
import { CartaService } from './carta.service';
import { Carta } from './carta';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent implements OnInit {

  constructor(private cartaService:CartaService) { this.prubita(); }

  ngOnInit(): void {
  }

  data : Carta[] = [];

  prubita() : void
  {
    this.cartaService.traerCartas().subscribe(carta=>
      {
        this.data = carta;
      });
  }

  carta:Carta = {
    idCarta : 0,
    nombrePlatillo : "",
    imageRuta : "",
    precio : 0,
    descripcion : ""
  }
}
