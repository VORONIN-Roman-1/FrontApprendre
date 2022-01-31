import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './about.component';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test-common/test.compenent';
import { PreviewModule } from './codin';
import { TestLifeCycleComponent } from './test/test-life-cycle.component/test-life-cycle.component.component';
//import { ChoixDirective } from './choix.directive';
//import { CapPipe } from './cap.pipe';
import { TestModule } from './test/test.module';
import { AppRoutingModule } from './app-routing.module';
import { TestParentComponent } from './test/test-parent/test-parent.component';
import { TestChildComponent } from './test/test-child/test-child.component';


// определение маршрутов
// const appRoutes: Routes =[
//   { path: 'about', component: AboutComponent},
//   { path: 'test', component: TestComponent},
// //  { path: '', component:  AppComponent},
//   { path: 'home', component: HomeComponent },
//   { path: 'testLife', component: TestLifeCycleComponent }

// ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    //TestLifeCycleComponent,
    AboutComponent,
 

   // TestComponent,
   // ChoixDirective,
  //  CapPipe
    
  ],
  imports: [
    BrowserModule, PreviewModule,
     //RouterModule.forRoot(appRoutes), 
     TestModule,
     AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
