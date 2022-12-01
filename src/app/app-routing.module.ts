import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuAdminComponent } from './components/admin/menu/menu.component';
import { MenuComponents } from './components/cliente/menu/menu.component';
import { CartaComponent } from './pages/cliente/carta/carta.component';
import { HomeComponent } from './pages/cliente/home/home.component';

const routes: Routes = [
  {
    path:"admin",component:MenuAdminComponent
  },
  {
    path:"",component:HomeComponent
  },
  {
    path:"carta", component:CartaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
