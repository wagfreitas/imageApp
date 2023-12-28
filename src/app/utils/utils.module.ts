import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AspectRatioComponent } from './aspect-ratio/aspect-ratio.component';
import { ImageShellComponent } from './image-shell/image-shell.component';
import { UtilsRoutingModule } from './utils-routing.module';
import { ShowHidePasswordComponent } from './show-hide-password/show-hide-password.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UtilsRoutingModule,
    IonicModule.forRoot(),
  ],
  declarations: [
    AspectRatioComponent,
    ImageShellComponent,
    ShowHidePasswordComponent,
  ],
  exports: [
    AspectRatioComponent,
    ImageShellComponent,
    ShowHidePasswordComponent

  ],
  entryComponents: [],
})
export class UtilsModule {}
