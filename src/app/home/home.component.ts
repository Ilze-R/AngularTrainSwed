import { Component } from '@angular/core';
import { Person } from '../types/person';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  parentData: Person = {name: 'Tom', age: 25};
}
