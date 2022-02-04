import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListEmployeComponent } from './list-employe.component';
import { DetailEmployeComponent } from './detail-employe.component';
import { PourtourDirective } from './pourtour.directive';
import { EmployeRoleColorPipe } from './employe-role-color.pipe';
import { EmployeService } from './employe.service';
@NgModule({
imports: [
CommonModule
],
declarations: [
   
ListEmployeComponent,
DetailEmployeComponent,
PourtourDirective,
EmployeRoleColorPipe
],
providers: [EmployeService]
})
export class EmployeModule { }