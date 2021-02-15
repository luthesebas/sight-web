import { TestBed } from '@angular/core/testing';

import { RouteParameters } from './route-parameter.service';

describe('RouteParameters', () => {
    let service: RouteParameters;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(RouteParameters);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
