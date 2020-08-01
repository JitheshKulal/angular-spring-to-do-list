import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // template: '<h1> Hello {{title}}</h1>',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-front';
  constructor(){
    console.log("initialized component");
  }

  names = ['a', 'b', 'c', 'd'];

}

