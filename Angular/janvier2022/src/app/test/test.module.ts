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
import { MetanitDirectiveComponent } from './metanit-directive/metanit-directive.component';
import { ThemeDirectiveDirective } from './metanit-directive/theme-directive.directive';
import { Metanitform1Component } from './forms/metanitform1/metanitform1.component';
import { EditEmployeComponent } from './forms/ecole/edit-employe/edit-employe.component';
import { EmployeFormComponent } from './forms/ecole/edit-employe/employe-form.component';



@NgModule({
  declarations: [
    TestLifeCycleComponent, 
    TestComponent,
    TestParentComponent,
    TestChildComponent,
    ChoixDirective,
    CapPipe,
    FeuComponent,
    MetanitDirectiveComponent,
    ThemeDirectiveDirective,
    Metanitform1Component,
    EditEmployeComponent,
    EmployeFormComponent
],
    
    
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class TestModule { }
//