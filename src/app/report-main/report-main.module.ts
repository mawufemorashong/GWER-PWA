import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportMainPageRoutingModule } from './report-main-routing.module';

import { ReportMainPage } from './report-main.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportMainPageRoutingModule
  ],
  declarations: [ReportMainPage]
})
export class ReportMainPageModule {}
