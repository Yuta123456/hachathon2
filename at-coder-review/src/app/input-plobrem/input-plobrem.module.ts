import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InputPlobremPageRoutingModule } from './input-plobrem-routing.module';

import { InputPlobremPage } from './input-plobrem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InputPlobremPageRoutingModule
  ],
  declarations: [InputPlobremPage]
})
export class InputPlobremPageModule {}
