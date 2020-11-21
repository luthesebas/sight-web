import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'abbreviate'
})
export class AbbreviatePipe implements PipeTransform {

  transform(value: number): string {
    return abbreviate(value);
  }

}

export const abbreviate = (value: number) => {
  if (value < 1e3) {
    return `${value}`;
  };
  if (value >= 1e3 && value < 1e6) {
    return +(value / 1e3).toFixed(1) + 'K';
  };
  if (value >= 1e6 && value < 1e9) {
    return +(value / 1e6).toFixed(1) + 'M';
  };
  if (value >= 1e9 && value < 1e12) {
    return +(value / 1e9).toFixed(1) + 'B';
  };
  return +(value / 1e12).toFixed(1) + 'T';
}
