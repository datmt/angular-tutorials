import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SofaComponent } from './sofa/sofa.component';
import { TvComponent } from './tv/tv.component';



@NgModule({
  declarations: [
    SofaComponent,
    TvComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LivingRoomModule { }
