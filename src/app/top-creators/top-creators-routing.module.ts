import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopCreatorsComponent } from './components/top-creators/top-creators.component';

const routes: Routes = [{ path: '', component: TopCreatorsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TopCreatorsRoutingModule {}
