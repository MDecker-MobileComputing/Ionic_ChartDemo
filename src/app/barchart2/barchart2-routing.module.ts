import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Barchart2Page } from './barchart2.page';

const routes: Routes = [
  {
    path: '',
    component: Barchart2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Barchart2PageRoutingModule {}
