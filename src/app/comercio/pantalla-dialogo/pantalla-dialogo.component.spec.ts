import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaDialogoComponent } from './pantalla-dialogo.component';

describe('PantallaDialogoComponent', () => {
  let component: PantallaDialogoComponent;
  let fixture: ComponentFixture<PantallaDialogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PantallaDialogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PantallaDialogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
