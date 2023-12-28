import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExamLaudosPage } from './exam-laudos.page';

const routes: Routes = [
  {
    path: '',
    component: ExamLaudosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExamLaudosPageRoutingModule {}
