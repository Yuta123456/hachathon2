import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InputProblemPageRoutingModule } from './input-problem-routing.module';

import { InputProblemPage } from './input-problem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InputProblemPageRoutingModule
  ],
  declarations: [InputProblemPage]
})
export class InputProblemPageModule {}
