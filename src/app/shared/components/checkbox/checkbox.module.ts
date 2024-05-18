import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckBoxComponent } from './checkbox.component';

@NgModule({
  declarations: [CheckBoxComponent],
  imports: [CommonModule],
  exports: [CheckBoxComponent]
})
export class CheckboxModule { }
