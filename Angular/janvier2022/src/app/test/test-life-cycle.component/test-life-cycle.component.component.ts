import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-life-cycle.component',
  templateUrl: './test-life-cycle.component.component.html',
  styleUrls: ['./test-life-cycle.component.component.css']
})
export class TestLifeCycleComponent implements OnInit, OnDestroy {

  constructor() { }
  ngOnDestroy(): void {
    console.log("lifeCycle destroy");
   // alert("Hi end");
  }

  ngOnInit(): void {console.log("lifeCycle is live");
 // alert("Hi");
  }

}
