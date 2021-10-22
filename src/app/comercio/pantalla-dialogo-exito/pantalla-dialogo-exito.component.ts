import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pantalla-dialogo-exito',
  templateUrl: './pantalla-dialogo-exito.component.html',
  styleUrls: ['./pantalla-dialogo-exito.component.css']
})
export class PantallaDialogoExitoComponent implements OnInit {

  @Input() public mensaje: string;

  constructor(private location: Location, private route: ActivatedRoute) {
    this.mensaje = this.route.snapshot.paramMap.get('mensaje')!;
  }

  ngOnInit(): void {
  }

  goBack() {
    this.location.back();
  }
}
