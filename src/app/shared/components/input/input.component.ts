import { Component, forwardRef } from '@angular/core';
import { ValueAcessorComponent } from '../value-acessor/value-acessor.component';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent extends ValueAcessorComponent {
  public setValue(event: Event): void {
    this.updateValue((event.target as HTMLInputElement).value)
  }
}
