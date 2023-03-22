import {
  AfterContentInit,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Person } from '../types/person';

@Component({
  selector: 'app-person-info',
  templateUrl: './person-info.component.html',
  styleUrls: ['./person-info.component.css'],
})
export class PersonInfoComponent
  implements OnInit, AfterContentInit, OnChanges
{
  @Input() personAttribute: Person;

  constructor() {
    console.log('person attribute: ' + this.personAttribute);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
}
