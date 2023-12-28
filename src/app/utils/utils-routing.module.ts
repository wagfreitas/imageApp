import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
   { path: 'listexam',
   loadChildren: () => import('../components/exam-list/exam-list.module').then(m => m.ExamListPageModule)
   },
   { path: 'laudosexam',
   loadChildren: () => import('../components/exam-laudos/exam-laudos.module').then(m => m.ExamLaudosPageModule)
   }

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UtilsRoutingModule {}
