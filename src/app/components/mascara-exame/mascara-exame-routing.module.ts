import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MascaraExamePage } from './mascara-exame.page';

const routes: Routes = [
  {
    path: '',
    component: MascaraExamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MascaraExamePageRoutingModule {}
