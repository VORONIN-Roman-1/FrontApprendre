import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './about.component';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test.compenent';
import { PreviewModule } from './codin';
import { TestLifeCycleComponent } from './test-life-cycle.component/test-life-cycle.component.component';
import { ChoixDirective } from './choix.directive';

// определение маршрутов
const appRoutes: Routes =[
  { path: 'about', component: AboutComponent},
  { path: 'test', component: TestComponent},
//  { path: '', component:  AppComponent},
  { path: 'home', component: HomeComponent },
  { path: 'testLife', component: TestLifeCycleComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestLifeCycleComponent,
    AboutComponent,
    TestComponent,
    ChoixDirective
    
  ],
  imports: [
    BrowserModule, PreviewModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
