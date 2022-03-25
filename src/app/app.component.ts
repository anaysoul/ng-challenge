import { Component, Input } from '@angular/core';
import faker from '@faker-js/faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Typing Challenge';
  randomText = faker.lorem.sentence();
  enteredText = '';

  compare(randomLetter: string, enteredLetter: string) {
    if (!enteredLetter) {
      return 'pending';
    }
    return randomLetter === enteredLetter ? 'correct' : 'incorrect';
  }

  onInput(value: string) {
    this.enteredText = value;
    console.log(this.enteredText);
  }
}
