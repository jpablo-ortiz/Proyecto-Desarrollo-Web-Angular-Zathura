import { TransaccionVentaComponent } from './comercio/transaccion-venta/transaccion-venta.component';
import { TransaccionCompraComponent } from './comercio/transaccion-compra/transaccion-compra.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavegacionEstrellasComponent } from './estrellas/navegacion-estrellas/navegacion-estrellas.component';
import { MenuComponent } from './menu/menu/menu.component';
import { NavegacionPlanetasComponent } from './planetas/navegacion-planetas/navegacion-planetas.component';
import { VistaPlanetaComponent } from './planetas/vista-planeta/vista-planeta.component';

const routes: Routes = [
  { path: 'vender', component: TransaccionVentaComponent },
  { path: 'comprar/:idp/:idpr', component: TransaccionCompraComponent },
  { path: 'planeta/:id', component: VistaPlanetaComponent },
  { path: 'planeta/estrella/:id', component: NavegacionPlanetasComponent },
  { path: 'estrella', component: NavegacionEstrellasComponent },
  { path: 'menu', component: MenuComponent },
  { path: '', pathMatch: 'full', redirectTo: 'menu' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
