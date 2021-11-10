import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarNaveComponent } from './buscar-nave.component';

describe('BuscarNaveComponent', () => {
  let component: BuscarNaveComponent;
  let fixture: ComponentFixture<BuscarNaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarNaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarNaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
