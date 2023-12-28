import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MascaraExamePageRoutingModule } from './mascara-exame-routing.module';

import { MascaraExamePage } from './mascara-exame.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MascaraExamePageRoutingModule
  ],
  declarations: [MascaraExamePage]
})
export class MascaraExamePageModule {}
