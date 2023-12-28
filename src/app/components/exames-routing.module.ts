import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';





const routes: Routes = [

  {
    path: '',
    redirectTo: 'exameslist',
    pathMatch: 'full'
  },
  {
    path: 'mascaraexames',
    loadChildren: () => import('./mascara-exame/mascara-exame.module').then(m => m.MascaraExamePageModule)
  },

  {
    path: 'exameslaudados',
    loadChildren: () => import('./exam-laudos/exam-laudos.module').then(m => m.ExamLaudosPageModule)


  },
  {
    path: 'exameslist',
    loadChildren: () => import('./exam-list/exam-list.module').then(m => m.ExamListPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExamesRoutingModule {}
