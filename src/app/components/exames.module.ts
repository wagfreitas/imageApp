
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamesRoutingModule } from './exames-routing.module';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';



registerLocaleData(localePt, 'pt-BR');



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ExamesRoutingModule
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'pt-BR' }  ]
})
export class ExamesModule { }
