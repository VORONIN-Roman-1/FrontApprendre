import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test-common/test.compenent';
import { TestLifeCycleComponent } from './test-life-cycle.component/test-life-cycle.component.component';
import { CapPipe } from './cap.pipe';
import { ChoixDirective } from './choix.directive';



@NgModule({
  declarations: [TestLifeCycleComponent, TestComponent,ChoixDirective,
    CapPipe],
  imports: [
    CommonModule
  ]
})
export class TestModule { }
//