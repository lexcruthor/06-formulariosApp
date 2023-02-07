import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { RouterLink } from '@angular/router';



@NgModule({
  declarations: [
    SidemenuComponent
  ],
  imports: [
    CommonModule,
    RouterLink
  ],
  exports:[
    SidemenuComponent
  ]
})
export class SharedModule { }
