import { Component, Input } from '@angular/core';

@Component({
  selector: 'ark-input',
  template: `
    <input [ngClass]="classes" />
  `,
})
export class InputComponent {
  @Input() class = '';

  get classes() {
    const baseClasses = 'ark-input';
    return `${baseClasses} ${this.class}`;
  }
}
