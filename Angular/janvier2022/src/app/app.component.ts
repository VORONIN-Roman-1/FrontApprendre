import { Employee } from './employee';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `Main 
  <a id="menu1" href="/home">Home</a> <br>
  <a id="menu2" href="/about">About</a>v
  <a id="test" href="/test">Test</a><br>
  <a id="testParent" href="/testParent">testParent</a><br>
  <a id="testLife" href="/testLife">Test Life</a><br>
  <a id="display" href="/display">display</a><br>
  <a id="feu" href="/feu">feu</a><br>
  <a id="metanitDirective" href="/metanitDirective">metanitDirective</a><br>
  <a id="metanitform1" href="/metanitform1">metanitform1</a><br>
  <router-outlet></router-outlet>
  `

  //styleUrls: ['./app.component.css']
})
export class AppComponent {
 

  }
