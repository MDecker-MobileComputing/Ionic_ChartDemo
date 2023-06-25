import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'barchart2',
    loadChildren: () => import('./barchart2/barchart2.module').then( m => m.Barchart2PageModule)
  },
  {
    path: 'piechart',
    loadChildren: () => import('./piechart/piechart.module').then( m => m.PiechartPageModule)
  },
  {
    path: 'linechart',
    loadChildren: () => import('./linechart/linechart.module').then( m => m.LinechartPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
