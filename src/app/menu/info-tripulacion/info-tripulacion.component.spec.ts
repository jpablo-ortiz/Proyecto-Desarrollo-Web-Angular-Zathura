import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoTripulacionComponent } from './info-tripulacion.component';

describe('InfoTripulacionComponent', () => {
  let component: InfoTripulacionComponent;
  let fixture: ComponentFixture<InfoTripulacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoTripulacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoTripulacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
