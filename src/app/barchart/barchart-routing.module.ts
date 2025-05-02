import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BarchartPage } from './barchart.page';

const routes: Routes = [
  {
    path: '',
    component: BarchartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BarchartPageRoutingModule {}
