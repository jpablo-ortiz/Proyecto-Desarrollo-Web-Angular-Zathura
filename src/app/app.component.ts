import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TripulanteService } from './shared/services/tripulante/tripulante.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'zathura';
  auth = false;
  rolComerciante = false;
  rolNavegante = false;

  constructor(
    private tripulanteService: TripulanteService,
    private router: Router
  ) { }

  ngOnInit() {
    this.auth = this.tripulanteService.isAuth();
    var rol = this.tripulanteService.getRolTripulanteLogeado();
    if (rol == "Comerciante") {
      this.rolComerciante = true;
    } else if (rol == "Navegante") {
      this.rolNavegante = true;
    } else if (rol == "Capitan") {
      this.rolNavegante = true;
      this.rolComerciante = true;
    }
  }

  salir() {
    this.tripulanteService.cerrarSesion();
    this.router.navigate(['/login']).then(() => {
      window.location.reload();
    });
  }

  abrirPlanetaActual() {
    var id = this.tripulanteService.getIdTripulanteLogeado();
    if (id != -1) {
      this.tripulanteService.getPlanetaActualTripulante(id).subscribe(
        planeta => {
          this.router.navigate(['/planeta/' + planeta.id]);
        },
      );
    }
  }
}
