import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProductosCompraComponent } from './lista-productos-compra.component';

describe('ListaProductosCompraComponent', () => {
  let component: ListaProductosCompraComponent;
  let fixture: ComponentFixture<ListaProductosCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaProductosCompraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaProductosCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
