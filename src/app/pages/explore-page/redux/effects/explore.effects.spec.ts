import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ExploreEffects } from './explore.effects';

describe('ExploreEffects', () => {
  let actions$: Observable<any>;
  let effects: ExploreEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ExploreEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(ExploreEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
