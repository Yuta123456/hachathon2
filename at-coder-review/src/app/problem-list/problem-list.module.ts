import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProblemListPageRoutingModule } from './problem-list-routing.module';

import { ProblemListPage } from './problem-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProblemListPageRoutingModule
  ],
  declarations: [ProblemListPage]
})
export class ProblemListPageModule {}
