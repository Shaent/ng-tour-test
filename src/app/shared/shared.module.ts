import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomTourService } from './custom-tour.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [CustomTourService]
})
export class SharedModule { }
