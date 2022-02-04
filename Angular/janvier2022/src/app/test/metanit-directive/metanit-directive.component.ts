import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-metanit-directive',
  templateUrl: './metanit-directive.component.html',
  styleUrls: ['./metanit-directive.component.css']
})
export class MetanitDirectiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  condition: boolean=true;
     
    toggle(){
        this.condition=!this.condition;
    }
}
