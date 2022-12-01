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

@NgModule({
  declarations: [
    AppComponent,
    MenuAdminComponent,
    MenuComponents,
    FooterClienteComponent,
    HomeComponent,
    CartaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
