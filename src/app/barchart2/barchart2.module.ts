import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Barchart2PageRoutingModule } from './barchart2-routing.module';

import { Barchart2Page } from './barchart2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Barchart2PageRoutingModule
  ],
  declarations: [Barchart2Page]
})
export class Barchart2PageModule {}
