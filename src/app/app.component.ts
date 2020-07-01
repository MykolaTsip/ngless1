import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:
    '<app-user [name]=""аоаооаао""></app-user>' +
    '<app-user></app-user>' +
    '<app-user></app-user>' ,
  styles: ['']
})
export class AppComponent {

}
