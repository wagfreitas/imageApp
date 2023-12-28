import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExamLaudosPageRoutingModule } from './exam-laudos-routing.module';

import { ExamLaudosPage } from './exam-laudos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExamLaudosPageRoutingModule
  ],
  declarations: [ExamLaudosPage]
})
export class ExamLaudosPageModule {}
