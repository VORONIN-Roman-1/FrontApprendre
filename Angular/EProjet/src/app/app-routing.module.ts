import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// routes
const appRoutes: Routes = [
    { path: '', redirectTo: 'employe/all', pathMatch: 'full' }
];
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }