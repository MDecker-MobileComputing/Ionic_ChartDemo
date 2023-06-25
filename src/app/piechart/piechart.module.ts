import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PiechartPageRoutingModule } from './piechart-routing.module';

import { PiechartPage } from './piechart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PiechartPageRoutingModule
  ],
  declarations: [PiechartPage]
})
export class PiechartPageModule {}
