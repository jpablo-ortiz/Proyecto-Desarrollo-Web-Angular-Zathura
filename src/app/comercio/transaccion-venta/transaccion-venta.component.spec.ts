import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransaccionVentaComponent } from './transaccion-venta.component';

describe('TransaccionVentaComponent', () => {
  let component: TransaccionVentaComponent;
  let fixture: ComponentFixture<TransaccionVentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransaccionVentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransaccionVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
