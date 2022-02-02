import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  public answer:string="";
  public question = "Too easy?"
  public yesAnswer = "Yes";
  public noAnswer = "No";
  montrer(event : boolean){
    console.log(event)
    if (event){
      this.answer=this.yesAnswer;
    }
    else
    this.answer=this.noAnswer;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
