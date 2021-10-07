import { TestBed } from '@angular/core/testing';

import { ModeloNaveService } from './modelo-nave.service';

describe('ModeloNaveService', () => {
  let service: ModeloNaveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModeloNaveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
