import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BarchartPageRoutingModule } from './barchart-routing.module';

import { BarchartPage } from './barchart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BarchartPageRoutingModule
  ],
  declarations: [BarchartPage]
})
export class BarchartPageModule {}
