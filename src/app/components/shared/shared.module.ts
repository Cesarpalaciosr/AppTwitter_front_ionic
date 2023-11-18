import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { PostsComponent } from '../posts/posts.component';
import { IonicModule } from '@ionic/angular';
import { UsercardComponent } from '../usercard/usercard.component';
import { TwisterBoxComponent } from '../twister-box/twister-box.component';

@NgModule({
  declarations: [HeaderComponent, TwisterBoxComponent, PostsComponent, UsercardComponent],
  imports: [CommonModule, IonicModule],
  exports: [HeaderComponent, TwisterBoxComponent, PostsComponent, UsercardComponent],
})
export class SharedModule {}
