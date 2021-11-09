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

  constructor(
    private tripulanteService: TripulanteService,
    private router: Router
  ) { }

  ngOnInit() {
    this.auth = this.tripulanteService.isAuth();
  }

  salir() {
    this.tripulanteService.cerrarSesion();
    this.router.navigate(['/login']).then(() => {
      window.location.reload();
    });
  }
}
