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
    path: 'barchart',
    loadChildren: () => import('./barchart/barchart.module').then( m => m.BarchartPageModule)
  },
  {
    path: 'linechart',
    loadChildren: () => import('./linechart/linechart.module').then( m => m.LinechartPageModule)
  },
  {
    path: 'radarchart',
    loadChildren: () => import('./radarchart/radarchart.module').then( m => m.RadarchartPageModule)
  },
  {
    path: 'piechart',
    loadChildren: () => import('./piechart/piechart.module').then( m => m.PiechartPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
