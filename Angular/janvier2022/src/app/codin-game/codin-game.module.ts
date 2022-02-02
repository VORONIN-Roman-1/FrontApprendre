import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayComponent } from './display/display.component';
import { VoterComponent } from './voter/voter.component';



@NgModule({
  declarations: [DisplayComponent, VoterComponent],
  imports: [
    CommonModule
  ]
})
export class CodinGameModule { }
