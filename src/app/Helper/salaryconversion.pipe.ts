import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salaryconversion'
})
export class SalaryconversionPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown { 
    return value*2000;
  }

}
