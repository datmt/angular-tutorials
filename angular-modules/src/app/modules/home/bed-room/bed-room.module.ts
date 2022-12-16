import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BedComponent } from './bed/bed.component';
import { PillowComponent } from './pillow/pillow.component';



@NgModule({
  declarations: [
    BedComponent,
    PillowComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BedRoomModule { }
