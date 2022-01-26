// Angular 8.x code
import { Component, Input, NgModule } from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';

@Component({
  selector:'menu1-component',
  template: `
    <div id="menuComp">You are at menu 1.</div>
  `
})
export class Menu1Component {
}

@Component({
  selector:'menu2-component2',
  template: `
    <div id="menuComp">You are at menu 2.</div>
  `
})
export class Menu2Component {
}

@Component({
  selector:'menu-display-component',
  template: ` <a id="menu1" href="/menu1">Menu1</a>
               <a id="menu2" href="/menu2">Menu2</a>

               <router-outlet></router-outlet>               
  `
})
export class MenuDisplayComponent {
}

export const appRoutes:Routes = [
  {path:'menu1', component: Menu1Component},{
    path:'menu2', component: Menu2Component
  }
]



// #region Preview
@Component({
    template: `    
      <menu-display-component></menu-display-component>
    `
})
export class PreviewComponent { }
// #endregion Preview


// #region Module declaration - Do not Change
@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(appRoutes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

@NgModule({
    imports: [
      RouterModule,
      AppRoutingModule
    ],
    declarations: [PreviewComponent, Menu1Component, Menu2Component, MenuDisplayComponent],
    entryComponents: [PreviewComponent],
    providers: [{provide: APP_BASE_HREF, useValue : '/'}]
})
export class PreviewModule { }
// #endregion Module declaration