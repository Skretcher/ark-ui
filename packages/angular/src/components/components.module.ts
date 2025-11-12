import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from './button.component';
import { CardComponent } from './card.component';
import { InputComponent } from './input.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ButtonComponent, CardComponent, InputComponent],
  exports: [ButtonComponent, CardComponent, InputComponent],
})
export class ArkComponentModule {}
