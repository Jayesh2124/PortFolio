import { Directive, HostListener, ElementRef } from '@angular/core';


@Directive({
  selector: '[appNumericInput]'
})
export class NumericDirective {

  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event'])
  onInput(event: any): void {
    const input = event.target.value.replace(/[^0-9]/g, ''); // Remove non-numeric characters
    event.target.value = this.formatNumber(input);
  }

  private formatNumber(value: string): string {
    const parts = value.split(/(?=(?:\d{3})+(?!\d))/g);
    return parts.join(',');
  }

}


