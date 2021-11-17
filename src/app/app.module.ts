import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './autenticacion/login/login.component';
import { CreacionNaveComponent } from './autenticacion/registro/creacion-nave/creacion-nave.component';
import { RegistroComponent } from './autenticacion/registro/registro/registro.component';
import { PantallaDialogoExitoComponent } from './comercio/pantalla-dialogo-exito/pantalla-dialogo-exito.component';
import { PantallaDialogoComponent } from './comercio/pantalla-dialogo/pantalla-dialogo.component';
import { TransaccionCompraComponent } from './comercio/transaccion-compra/transaccion-compra.component';
import { TransaccionVentaComponent } from './comercio/transaccion-venta/transaccion-venta.component';
import { NavegacionEstrellasComponent } from './estrellas/navegacion-estrellas/navegacion-estrellas.component';
import { PantallaJuegoComponent } from './estrellas/pantalla-juego/pantalla-juego.component';
import { InfoNaveComponent } from './menu/info-nave/info-nave.component';
import { InfoTripulacionComponent } from './menu/info-tripulacion/info-tripulacion.component';
import { InfoTripulanteComponent } from './menu/info-tripulante/info-tripulante.component';
import { MenuComponent } from './menu/menu/menu.component';
import { ListaProductosCompraComponent } from './planetas/lista-productos-compra/lista-productos-compra.component';
import { ListaProductosVentaComponent } from './planetas/lista-productos-venta/lista-productos-venta.component';
import { NavegacionPlanetasComponent } from './planetas/navegacion-planetas/navegacion-planetas.component';
import { VistaPlanetaComponent } from './planetas/vista-planeta/vista-planeta.component';
import { BuscarNaveComponent } from './autenticacion/registro/buscar-nave/buscar-nave.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InfoTripulanteComponent,
    InfoTripulacionComponent,
    InfoNaveComponent,
    NavegacionEstrellasComponent,
    NavegacionPlanetasComponent,
    VistaPlanetaComponent,
    ListaProductosCompraComponent,
    ListaProductosVentaComponent,
    TransaccionCompraComponent,
    TransaccionVentaComponent,
    PantallaDialogoComponent,
    PantallaDialogoExitoComponent,
    PantallaJuegoComponent,
    LoginComponent,
    RegistroComponent,
    CreacionNaveComponent,
    BuscarNaveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
