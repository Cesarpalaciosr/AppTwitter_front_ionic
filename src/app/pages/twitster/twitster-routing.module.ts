import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TwitsterPage } from './twitster.page';

const routes: Routes = [
  {
    path: '',
    component: TwitsterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TwitsterPageRoutingModule {}
