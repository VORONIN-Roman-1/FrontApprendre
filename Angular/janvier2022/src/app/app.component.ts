import { Employee } from './employee';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `Main 
  <a id="menu1" href="/home">Home</a> <br>
  <a id="menu2" href="/about">About</a>v
  <a id="test" href="/test">Test</a>
  <a id="test" href="/testLife">Test Life</a>
  <router-outlet></router-outlet>
  `

  //styleUrls: ['./app.component.css']
})
export class AppComponent {
 

  }
