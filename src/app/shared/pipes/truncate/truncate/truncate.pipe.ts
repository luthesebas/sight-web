import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, limit = 10, completeWords = false, ellipsis = '…'): any {
    if (!value) {
      return '';
    }
    if (value.length <= limit) {
      return value;
    } else {
      if (completeWords) {
        limit = value.substr(0, limit).lastIndexOf(' ');
      }
      return `${value.substr(0, limit)}${ellipsis}`;
    }
  }

}
