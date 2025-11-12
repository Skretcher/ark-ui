import { Component, Input } from '@angular/core';

@Component({
  selector: 'ark-card',
  template: `
    <div [ngClass]="classes">
      <ng-content></ng-content>
    </div>
  `,
})
export class CardComponent {
  @Input() class = '';

  get classes() {
    const baseClasses = 'ark-card';
    return `${baseClasses} ${this.class}`;
  }
}
