import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LinechartPageRoutingModule } from './linechart-routing.module';

import { LinechartPage } from './linechart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LinechartPageRoutingModule
  ],
  declarations: [LinechartPage]
})
export class LinechartPageModule {}
