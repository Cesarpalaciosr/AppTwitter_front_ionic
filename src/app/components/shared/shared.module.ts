import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { IonicModule } from '@ionic/angular';
import { TwisterBoxComponent } from '../twister-box/twister-box.component';

@NgModule({
  declarations: [HeaderComponent, TwisterBoxComponent],
  imports: [CommonModule, IonicModule],
  exports: [HeaderComponent, TwisterBoxComponent],
})
export class SharedModule {}
