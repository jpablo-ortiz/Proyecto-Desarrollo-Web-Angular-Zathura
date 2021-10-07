import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavegacionPlanetasComponent } from './navegacion-planetas.component';

describe('NavegacionPlanetasComponent', () => {
  let component: NavegacionPlanetasComponent;
  let fixture: ComponentFixture<NavegacionPlanetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavegacionPlanetasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavegacionPlanetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
