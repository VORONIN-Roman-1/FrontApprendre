import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about.component';
import { HomeComponent } from './home.component';
import { TestComponent } from './test/test-common/test.compenent';
import { TestLifeCycleComponent } from './test/test-life-cycle.component/test-life-cycle.component.component';


const routes: Routes = [
  { path: 'about', component: AboutComponent},
{ path: 'test', component: TestComponent},
//  { path: '', component:  AppComponent},
{ path: 'home', component: HomeComponent },
{ path: 'testLife', component: TestLifeCycleComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
