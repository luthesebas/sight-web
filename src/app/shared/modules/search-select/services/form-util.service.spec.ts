import { TestBed } from '@angular/core/testing';

import { FormUtil } from './form-util.service';

describe('FormUtil', () => {
  let service: FormUtil;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormUtil);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
