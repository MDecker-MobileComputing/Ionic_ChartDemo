import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PiechartPage } from './piechart.page';

const routes: Routes = [
  {
    path: '',
    component: PiechartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PiechartPageRoutingModule {}
