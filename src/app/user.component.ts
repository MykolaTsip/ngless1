import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-user',
  template: '{{name}}-{{age}}',
  styles: ['']
})
export class UserComponent {
  @Input()
 name: string | number;
  @Input()
 age: number;
}
