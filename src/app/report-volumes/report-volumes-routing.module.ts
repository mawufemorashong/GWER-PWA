import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportVolumesPage } from './report-volumes.page';

const routes: Routes = [
  {
    path: '',
    component: ReportVolumesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportVolumesPageRoutingModule {}
