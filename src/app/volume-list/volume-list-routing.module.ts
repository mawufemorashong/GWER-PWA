import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VolumeListPage } from './volume-list.page';

const routes: Routes = [
  {
    path: '',
    component: VolumeListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VolumeListPageRoutingModule {}
