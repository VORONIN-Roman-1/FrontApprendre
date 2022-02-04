import { Employe } from './../forms/ecole/edit-employe/Employe';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test-child',
  templateUrl: './test-child.component.html',
  styleUrls: ['./test-child.component.css']
})
export class TestChildComponent implements OnInit {
  isRedChildren:boolean=false;
  // @Input() namename:string;
  @Input()  employe :Employe;
  @Input()  isDarkChildren:boolean=false;
  @Input()  isDarkChildrenModel:boolean=false;

 @Input()  name:string = "Ivan";
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
  @Output() onChanged = new EventEmitter<boolean>();
  @Output() onChangedDarkChildren = new EventEmitter<boolean>();
  @Output() isDarkChildrenModelChange = new EventEmitter<boolean>();// енаты надо строго такое имя ставить чтобы все работало, бялдь
  @Output() onChangedRedChildren = new EventEmitter<string>();
    change(increased:any) {
        this.onChanged.emit(increased);
    }

  checkValueDark(event:any){
    console.log(event.currentTarget.checked);
    this.isDarkChildren=event.currentTarget.checked;
    console.log (`isDarkChildren= ${this.isDarkChildren}`)
    this.onChangedDarkChildren.emit(event.currentTarget.checked);
  }
  checkValueDarkModel2(event:any){
    console.log(event.currentTarget.checked);
    this.isDarkChildrenModel=event.currentTarget.checked;
    console.log (`isDarkChildrenModel= ${this.isDarkChildrenModel}`)
    this.isDarkChildrenModelChange.emit(event.currentTarget.checked);
  }
  checkValueDarkModel(model:boolean){
    console.log(model);
    this.isDarkChildrenModel=model;
    console.log (`isDarkChildrenModel= ${this.isDarkChildrenModel}`)
    this.isDarkChildrenModelChange.emit(model);
  }
  
  checkValueRed(s:string){
    console.log(s);
    
    this.onChangedRedChildren.emit(s);
  }
}
