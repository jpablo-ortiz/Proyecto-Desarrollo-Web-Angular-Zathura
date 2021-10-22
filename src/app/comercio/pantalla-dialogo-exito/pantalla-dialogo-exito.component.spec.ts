import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaDialogoExitoComponent } from './pantalla-dialogo-exito.component';

describe('PantallaDialogoExitoComponent', () => {
  let component: PantallaDialogoExitoComponent;
  let fixture: ComponentFixture<PantallaDialogoExitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PantallaDialogoExitoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PantallaDialogoExitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
