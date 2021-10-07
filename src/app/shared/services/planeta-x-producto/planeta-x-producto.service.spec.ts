import { TestBed } from '@angular/core/testing';

import { PlanetaXProductoService } from './planeta-x-producto.service';

describe('PlanetaXProductoService', () => {
  let service: PlanetaXProductoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanetaXProductoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
