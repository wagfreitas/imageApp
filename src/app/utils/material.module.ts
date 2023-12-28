import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule } from "@angular/material/table"
import {MatButtonModule} from "@angular/material/button"
import {  MatInputModule} from "@angular/material/input"
import { MatSelectModule} from "@angular/material/select"
import { MatIconModule} from "@angular/material/icon"
import { MatFormFieldModule} from "@angular/material/form-field"


@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
  ]
})
export class MaterialModule { }
