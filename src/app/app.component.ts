import { Component, Input } from '@angular/core';
import faker from '@faker-js/faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @Input() inputName: string = '';
  @Input() inputDate: string = '';
  @Input() inputAmount: string = '';
  @Input() inputHeight: number = 0;
  @Input() inputMiles: number = 0;

  onNameChange(value: string) {
    this.inputName = value;
  }
  onDateChange(value: string) {
    this.inputDate = value;
  }
  onAmountChange(value: string) {
    this.inputAmount = value;
  }
  onHeightChange(value: number) {
    this.inputHeight = value;
  }
  onMilesChange(value: string) {
    this.inputMiles = parseFloat(value);
  }
}
