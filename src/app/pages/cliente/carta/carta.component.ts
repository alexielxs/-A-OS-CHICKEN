import { Component, OnInit } from '@angular/core';
import { CartaService } from './carta.service';
import { Carta, CartaTwo } from './carta';

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

  listaCarta : CartaTwo[] = [];
  cartaTwo : CartaTwo = {
    idCarta : 0,
    nombrePlatillo : "",
    imageRuta : "",
    precio : 0,
    descripcion : "",
    cantidad : 0,
  }

  agragarAlCarrito(platillo : any)
  {

    let carrito = localStorage.getItem("carrito");
    if (carrito != null)
    {
      let carritos = JSON.parse(carrito);
      this.listaCarta = carritos;
    }

    for (let i = 0; i<this.listaCarta.length; i++)
    {
      if (this.listaCarta[i].idCarta==platillo.idCarta)
      {
        this.listaCarta[i].cantidad++;
        
        localStorage.setItem("carrito", JSON.stringify(this.listaCarta));
        return;
      }
    }
 

    this.cartaTwo.idCarta = platillo.idCarta;
    this.cartaTwo.nombrePlatillo = platillo.nombrePlatillo;
    this.cartaTwo.precio = platillo.precio;
    this.cartaTwo.imageRuta = platillo.imageRuta;
    this.cartaTwo.descripcion = platillo.descripcion;
    this.cartaTwo.cantidad = 1;
    
    this.listaCarta.push(this.cartaTwo)
    localStorage.setItem("carrito", JSON.stringify(this.listaCarta));
  }


  

}
