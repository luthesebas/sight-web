import { Injectable } from '@angular/core';
import { ValidatorFn, AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormUtil {

  constructor() { }

  static isOptionSelected<T>(
    allOptions: T[],
    compare: (o1: T, o2: T) => boolean
  ): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      if (control.value == null || control.value === '') {
        return null;
      }

      if (typeof control.value === 'string') {
        return { optionSelected: false }; // Error value
      }

      const anySelected = allOptions.find(o => compare(o, control.value));
      return (anySelected) ? null : ({ optionSelected: false });
    };
  }

}
