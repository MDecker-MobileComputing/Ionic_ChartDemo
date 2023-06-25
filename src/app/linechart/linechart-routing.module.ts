import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LinechartPage } from './linechart.page';

const routes: Routes = [
  {
    path: '',
    component: LinechartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LinechartPageRoutingModule {}
