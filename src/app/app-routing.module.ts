import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoEstrellaComponent } from './estrellas/info-estrella/info-estrella.component';
import { NavegacionEstrellasComponent } from './estrellas/navegacion-estrellas/navegacion-estrellas.component';
import { MenuComponent } from './menu/menu/menu.component';
import { NavegacionPlanetasComponent } from './planetas/navegacion-planetas/navegacion-planetas.component';

const routes: Routes = [

  { path: 'planeta', component: NavegacionPlanetasComponent },
  { path: 'estrella', component: NavegacionEstrellasComponent },
  { path: 'estrella/:id', component: InfoEstrellaComponent },
  { path: 'menu', component: MenuComponent },
  { path: '', pathMatch: 'full', redirectTo: 'menu' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
