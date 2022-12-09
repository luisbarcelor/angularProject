import { TestBed } from '@angular/core/testing';

import { CalculatorOperationsService } from './calculator-operations.service';

describe('CalculatorOperationsService', () => {
  let service: CalculatorOperationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorOperationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
