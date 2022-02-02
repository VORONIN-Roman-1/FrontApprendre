import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feu',
  templateUrl: './feu.component.html',
  styleUrls: ['./feu.component.css']
})
export class FeuComponent implements OnInit {
  isRed:boolean=false;
  isYellow:boolean=false;
  isGreen:boolean=true;

  timeLeft: number = 60;
  interval;

  statusAll: string[] = [ "aller", "attention", "stop"];
  status:string=this.statusAll[0];
  colors: string[]= ["red", "yellow", "green"];
    constructor() { }

    ngOnInit(): void {
      this.verifierStatus();
    }
  verifierStatus():void{
    console.log("verifierStatus");
    console.log("Status = "+this.status)
    if (this.status == "aller"){
      this.isGreen=true;
      this.isYellow=false;
      this.isRed=false;
    }
    else if (this.status == "attention"){
      this.isGreen=true;
      this.isYellow=true;
      this.isRed=false;
    }
    else if (this.status == "stop"){
      this.isGreen=false;
      this.isYellow=false;
      this.isRed=true;
    }
    console.log("Green = "+this.isGreen+ "; YEllow = "+this.isYellow+"; Red = "+this.isRed )
  }
  changeStatus():void{
    for (let index = 0; index < this.statusAll.length; index++) {
      if (this.status== this.statusAll[index]) {
        this.status= this.statusAll[(index+1)% this.statusAll.length]
        this.verifierStatus(); /// костыль не могу запустить из представления
        break;
      } 
      
    }
  }
  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 60;
      }
      console.log(this.timeLeft);
      this.changeStatus();
    },1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }
}
