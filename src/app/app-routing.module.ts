import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/topcreators', pathMatch: 'full' },
  {
    path: 'topcreators',
    loadChildren: () =>
      import('./top-creators/top-creators.module').then(
        (m) => m.TopCreatorsModule
      ),
  },
  { path: '**', redirectTo: '/topcreators' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
