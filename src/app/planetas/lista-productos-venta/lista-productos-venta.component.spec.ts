import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProductosVentaComponent } from './lista-productos-venta.component';

describe('ListaProductosVentaComponent', () => {
  let component: ListaProductosVentaComponent;
  let fixture: ComponentFixture<ListaProductosVentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaProductosVentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaProductosVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
