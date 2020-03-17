import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProblemListPage } from './problem-list.page';

const routes: Routes = [
  {
    path: '',
    component: ProblemListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProblemListPageRoutingModule {}
