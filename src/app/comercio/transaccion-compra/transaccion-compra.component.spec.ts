import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransaccionCompraComponent } from './transaccion-compra.component';

describe('TransaccionCompraComponent', () => {
  let component: TransaccionCompraComponent;
  let fixture: ComponentFixture<TransaccionCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransaccionCompraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransaccionCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
