import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RadarchartPage } from './radarchart.page';

const routes: Routes = [
  {
    path: '',
    component: RadarchartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RadarchartPageRoutingModule {}
