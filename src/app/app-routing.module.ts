import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuAdminComponent } from './components/admin/menu/menu.component';
import { MenuComponents } from './components/cliente/menu/menu.component';
import { PlatosComponent } from './pages/admin/platos/platos.component';
import { CartaComponent } from './pages/cliente/carta/carta.component';
import { CompraComponent } from './pages/cliente/compra/compra.component';
import { HomeComponent } from './pages/cliente/home/home.component';
import { LocalComponent } from './pages/cliente/local/local.component';
import { LoginComponent } from './pages/cliente/login/login.component';
import { NosotrosComponent } from './pages/cliente/nosotros/nosotros.component';


const routes: Routes = [
  {
    path:"admin",component:MenuAdminComponent
  },
  {
    path:"",component:HomeComponent
  },
  {
    path:"carta", component:CartaComponent
  },
  {
    path:"nosotros", component:NosotrosComponent
  },
  {
    path:"login", component:LoginComponent
  },
  {
    path:"locales", component:LocalComponent
  },
  {
    path:"compra", component:CompraComponent
  },
  {
    path:"platos", component:PlatosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
