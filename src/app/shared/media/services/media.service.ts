import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class MediaService {
    isMobileDevice$: Observable<boolean>;
    isStationaryDevice$: Observable<boolean>;

    constructor(private breakpointObserver: BreakpointObserver) {
        this.isMobileDevice$ = this.breakpointObserver
            .observe([Breakpoints.Handset, Breakpoints.Tablet])
            .pipe(
                map((result) => result.matches),
                shareReplay({ refCount: true })
            );

        this.isStationaryDevice$ = this.breakpointObserver
            .observe([Breakpoints.Web])
            .pipe(
                map((result) => result.matches),
                shareReplay({ refCount: true })
            );
    }
}
