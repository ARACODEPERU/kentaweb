import { Pipe, PipeTransform  } from '@angular/core';

@Pipe({
  name: 'formatDateString'
})


export class formatDateString implements PipeTransform{
  options: any;
  transform(value: string): string {
    this.options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(value).toLocaleDateString('es-ES', this.options);
  }
}