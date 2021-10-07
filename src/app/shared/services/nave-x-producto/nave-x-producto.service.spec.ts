import { TestBed } from '@angular/core/testing';

import { NaveXProductoService } from './nave-x-producto.service';

describe('NaveXProductoService', () => {
  let service: NaveXProductoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NaveXProductoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
