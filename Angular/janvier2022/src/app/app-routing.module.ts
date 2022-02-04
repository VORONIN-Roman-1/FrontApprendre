import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about.component';
import { DisplayComponent } from './codin-game/display/display.component';

import { HomeComponent } from './home.component';
import { FeuComponent } from './test/feu/feu.component';
import { EditEmployeComponent } from './test/forms/ecole/edit-employe/edit-employe.component';
import { Metanitform1Component } from './test/forms/metanitform1/metanitform1.component';
import { MetanitDirectiveComponent } from './test/metanit-directive/metanit-directive.component';
import { TestComponent } from './test/test-common/test.compenent';
import { TestLifeCycleComponent } from './test/test-life-cycle.component/test-life-cycle.component.component';
import { TestParentComponent } from './test/test-parent/test-parent.component';


const routes: Routes = [
  { path: 'about', component: AboutComponent},
{ path: 'test', component: TestComponent},
{ path: 'testParent', component: TestParentComponent},
//  { path: '', component:  AppComponent},
{ path: 'home', component: HomeComponent },
{ path: 'testLife', component: TestLifeCycleComponent },
{ path: 'display', component: DisplayComponent },
{ path: 'metanitDirective', component: MetanitDirectiveComponent },
{ path: 'metanitform1', component: Metanitform1Component },
{ path: 'formEcole', component: EditEmployeComponent },
{ path: 'feu', component: FeuComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
