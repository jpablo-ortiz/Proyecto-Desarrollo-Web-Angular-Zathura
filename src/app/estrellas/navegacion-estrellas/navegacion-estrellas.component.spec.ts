import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavegacionEstrellasComponent } from './navegacion-estrellas.component';

describe('NavegacionEstrellasComponent', () => {
  let component: NavegacionEstrellasComponent;
  let fixture: ComponentFixture<NavegacionEstrellasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavegacionEstrellasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavegacionEstrellasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
