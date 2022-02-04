import { Employe } from './../forms/ecole/edit-employe/Employe';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-parent',
  templateUrl: './test-parent.component.html',
  styleUrls: ['./test-parent.component.css']
})
export class TestParentComponent implements OnInit {
   nameParent:string = "Sveta";
   ageParent:number= 23;
   employeParent:Employe;
   
  constructor() { }
  isDark:boolean=false;
  isRed:boolean=false;
  ngOnInit(): void {
    this.employeParent = {
      
      "name": "Dupont",
      "age":24
    };
  }
  onChangeDark(event:any){
    this.isDark=event;
  }
  onChangeRed(event:any){
    this.isRed=event=='A'? true:false;
  }
}
