import { Component, Input } from '@angular/core';
import faker from '@faker-js/faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Typing Challenge';
  text = faker.lorem.sentence();

  @Input() inputText: string = '';
}
