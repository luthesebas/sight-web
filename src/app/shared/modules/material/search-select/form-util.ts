import { ValidatorFn, AbstractControl } from '@angular/forms';

export type CompareOptions<T> = (o1: T, o2: T) => boolean;

export function isOptionSelected<T>(
  allOptions: T[],
  compare: CompareOptions<T>
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
