import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/components/cliente/menu/usuario.service';
import { Usuario } from './usuario';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  constructor(private usuarioServio : UsuarioService) { this.llenarDatos() }

  ngOnInit(): void {
  }

  listausuario : Usuario[] = []

  llenarDatos()
  {
    this.usuarioServio.traerTodo().subscribe(lista =>{
      this.listausuario = lista;
      console.log(this.listausuario)
    })
  }

  eliminarDato()
  {
    
  }
}
