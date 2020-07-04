import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportMainPage } from './report-main.page';

const routes: Routes = [
  {
    path: '',
    component: ReportMainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportMainPageRoutingModule {}
