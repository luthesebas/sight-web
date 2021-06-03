import { TestBed } from '@angular/core/testing';

import { FilterFactory } from './filter-factory.service';

describe('FilterFactory', () => {
  let service: FilterFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterFactory);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
