import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { debounceTime, tap, startWith, map, delay } from 'rxjs/operators';

import { trimToNull } from './util';

@Component({
  selector: 'app-search-select',
  templateUrl: './search-select.component.html',
  styleUrls: ['./search-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchSelectComponent<T> implements OnInit, OnDestroy {

  @Input()
  set value(value: T) {
    this._control.setValue(value);
  }

  @Input()
  options: T[];

  @Input()
  displayOption: (value: T) => string;

  @Input()
  optionIncludes: (value: T, lowerCaseSearch: string) => boolean;

  @Output()
  selectionChange = new EventEmitter<T>();

  _control = new FormControl();

  filteredOptions$: Observable<T[]>;

  private readonly isFiltering = new BehaviorSubject<boolean>(false);
  get isFiltering$(): Observable<boolean> {
    return this.isFiltering;
  }

  //-------------------------------------------------------------------

  constructor() {
  }

  //-------------------------------------------------------------------

  private initFiltering() {
    this.filteredOptions$ = this._control.valueChanges
    .pipe(
      debounceTime(400), // Expose as input with default value 400
      tap(() => this.isFiltering.next(true)),
      startWith(''),
      map(search => this.filterOptions(search)),
      delay(1500),
      tap(() => this.isFiltering.next(false))
      );
    }

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
      this.isFiltering.unsubscribe();
      this.isFiltering.complete();
    }

  //-------------------------------------------------------------------

  public displayValue(value: T | string): string {
    if (typeof value === 'string') {
      return value;
    }
    return value ? this.displayOption(value) : '';
  }

  private filterOptions(search?: string | T | null): T[] {
    if (search == null || typeof search === 'object') {
      console.log('Null or Object', search);
      return this.options.slice();
    }

    search = trimToNull(search as string);
    if (search == null) {
      console.log('Trimmed to Null');
      return this.options.slice();
    }

    console.log('Filter', search, this.options);
    return this.options.slice();
  }
}
