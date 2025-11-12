import { Component, Input } from '@angular/core';

@Component({
  selector: 'ark-button',
  template: `
    <button [ngClass]="classes">
      <ng-content></ng-content>
    </button>
  `,
})
export class ButtonComponent {
  @Input() variant: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' = 'primary';
  @Input() class = '';

  get classes() {
    const baseClasses = 'ark-button';
    const variantClasses = {
      primary: 'ark-button-primary',
      secondary: 'ark-button-secondary',
      success: 'ark-button-success',
      danger: 'ark-button-danger',
      warning: 'ark-button-warning',
      info: 'ark-button-info',
    };

    return `${baseClasses} ${variantClasses[this.variant]} ${this.class}`;
  }
}
