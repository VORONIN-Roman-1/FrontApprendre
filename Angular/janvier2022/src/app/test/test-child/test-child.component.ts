import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-child',
  templateUrl: './test-child.component.html',
  styleUrls: ['./test-child.component.css']
})
export class TestChildComponent implements OnInit {
 @Input() name:string = "Ivan";
 _age:number=24;
 @Input() 
 set age(age : number) {
   
   this._age= age>100?100:age>0?age:0;
 }

get age() : number {
  return this._age;
}

 
  constructor() { }

  ngOnInit(): void {
  }

}
