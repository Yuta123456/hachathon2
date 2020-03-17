import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InputProblemPage } from './input-problem.page';

const routes: Routes = [
  {
    path: '',
    component: InputProblemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InputProblemPageRoutingModule {}
