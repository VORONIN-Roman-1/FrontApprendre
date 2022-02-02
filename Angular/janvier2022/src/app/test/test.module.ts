import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test-common/test.compenent';
import { TestLifeCycleComponent } from './test-life-cycle.component/test-life-cycle.component.component';
import { CapPipe } from './cap.pipe';
import { ChoixDirective } from './choix.directive';
import { TestParentComponent } from './test-parent/test-parent.component';
import { TestChildComponent } from './test-child/test-child.component';
import { FormsModule } from '@angular/forms';
import { FeuComponent } from './feu/feu.component';


@NgModule({
  declarations: [
    TestLifeCycleComponent, 
    TestComponent,
    TestParentComponent,
    TestChildComponent,
    ChoixDirective,
    CapPipe,
    FeuComponent],
    
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class TestModule { }
//