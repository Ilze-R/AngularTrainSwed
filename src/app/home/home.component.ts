import { Component } from '@angular/core';
import { Person } from '../types/person';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  parentData: Person[] = [
    { name: 'Tom', age: 25 },
    { name: 'Jerry', age: 30 },
    { name: 'Laura', age: 21 },
    { name: 'Betty', age: 12 },
  ];
}
