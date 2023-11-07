import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TwitsterPageRoutingModule } from './twitster-routing.module';

import { TwitsterPage } from './twitster.page';
import { SharedModule } from 'src/app/components/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TwitsterPage,
  },
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    TwitsterPageRoutingModule,
    RouterModule.forChild(routes),
  ],
  declarations: [TwitsterPage],
})
export class TwitsterPageModule {}
