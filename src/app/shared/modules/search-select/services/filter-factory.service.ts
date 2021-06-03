import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import { debounceTime, tap, map, distinctUntilChanged, delay } from 'rxjs/operators';



type IncludesSearch<T> = (value: T, lowerCaseSearch: string) => boolean;
type SearchQuery<T> = string | T | null;

export class Filter <T> {

  private isFiltering$: BehaviorSubject<boolean>;
  public get isFiltering(): Observable<boolean> {
    return this.isFiltering$;
  }

  private includesSearch: IncludesSearch<T>;

  constructor(
    includesSearch: IncludesSearch<T>,
  ) {
    this.isFiltering$ = new BehaviorSubject<boolean>(false);
    this.includesSearch = includesSearch;
  }

  public find(searchQuery$: Observable<SearchQuery<T>>, dataSet: T[]) {
    return searchQuery$.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      tap(() => this.isFiltering$.next(true)),
      map(search => this.filterDataSet(search, dataSet)),
      map(elements =>  new FilterResult(elements)),
      delay(2000),
      tap(() => this.isFiltering$.next(false))
    );
  }

  private filterDataSet(search: SearchQuery<T>, dataSet: T[]): T[] {
    if (search == null || typeof search === 'object') {
      return dataSet.slice();
    }
    const trimmedSearch = (search as string).trim();
    if (trimmedSearch === '') {
      return dataSet.slice();
    }
    const filterValue = trimmedSearch.toLowerCase();
    return dataSet.filter(e => this.includesSearch(e, filterValue));
  }

}

export class FilterResult<T> {

  readonly elements: T[];

  get numberOfElements(): number {
    return this.elements.length;
  }

  get isEmpty(): boolean {
    return this.numberOfElements === 0;
  }

  constructor(results: T[] = []) {
    this.elements = results ?? [];
  }

}


@Injectable({
  providedIn: 'root'
})
export class FilterFactory {

  public create<T>(includesSearch: IncludesSearch<T>) {
    return new Filter(includesSearch);
  }

}
