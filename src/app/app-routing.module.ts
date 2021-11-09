import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './autenticacion/login/login.component';
import { RegistroComponent } from './autenticacion/registro/registro/registro.component';
import { PantallaDialogoComponent } from './comercio/pantalla-dialogo/pantalla-dialogo.component';
import { TransaccionCompraComponent } from './comercio/transaccion-compra/transaccion-compra.component';
import { TransaccionVentaComponent } from './comercio/transaccion-venta/transaccion-venta.component';
import { NavegacionEstrellasComponent } from './estrellas/navegacion-estrellas/navegacion-estrellas.component';
import { MenuComponent } from './menu/menu/menu.component';
import { NavegacionPlanetasComponent } from './planetas/navegacion-planetas/navegacion-planetas.component';
import { VistaPlanetaComponent } from './planetas/vista-planeta/vista-planeta.component';

const routes: Routes = [
  { path: 'registro', component: RegistroComponent},
  { path: 'login', component:LoginComponent},
  { path: 'vender/:idPlaneta/:idProducto', component: TransaccionVentaComponent },
  { path: 'comprar/:idPlaneta/:idProducto', component: TransaccionCompraComponent },
  { path: 'planeta/:id', component: VistaPlanetaComponent },
  { path: 'planeta/estrella/:id', component: NavegacionPlanetasComponent },
  { path: 'estrella', component: NavegacionEstrellasComponent },
  { path: 'mensaje/:mensaje', component: PantallaDialogoComponent },
  { path: 'menu', component: MenuComponent },
  { path: '', pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
