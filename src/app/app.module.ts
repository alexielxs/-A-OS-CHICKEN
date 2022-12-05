import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuAdminComponent } from './components/admin/menu/menu.component';
import { IonicModule } from '@ionic/angular';
import { FooterClienteComponent } from './components/cliente/footer-cliente/footer-cliente.component';
import { HomeComponent } from './pages/cliente/home/home.component';
import { CartaComponent } from './pages/cliente/carta/carta.component';
import { MenuComponents } from './components/cliente/menu/menu.component';
import { NosotrosComponent } from './pages/cliente/nosotros/nosotros.component';
import { RutasComponent } from './components/cliente/rutas/rutas.component';
import { LoginComponent } from './pages/cliente/login/login.component';
import { LocalComponent } from './pages/cliente/local/local.component';
import { CompraComponent } from './pages/cliente/compra/compra.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PlatosComponent } from './pages/admin/platos/platos.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuAdminComponent,
    MenuComponents,
    FooterClienteComponent,
    HomeComponent,
    CartaComponent,
    NosotrosComponent,
    RutasComponent,
    LoginComponent,
    LocalComponent,
    CompraComponent,
    PlatosComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
