import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'about-us',
    loadChildren: () => import('./about-us/about-us.module').then( m => m.AboutUsPageModule)
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./contact-us/contact-us.module').then( m => m.ContactUsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'volume-list',
    loadChildren: () => import('./volume-list/volume-list.module').then( m => m.VolumeListPageModule)
  },
  {
    path: 'all-reports',
    loadChildren: () => import('./report-main/report-main.module').then( m => m.ReportMainPageModule)
  },
  {
    path: 'report-volumes',
    loadChildren: () => import('./report-volumes/report-volumes.module').then( m => m.ReportVolumesPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
