import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopCreatorsRoutingModule } from './top-creators-routing.module';
import { TopCreatorsComponent } from './components/top-creators/top-creators.component';

@NgModule({
  declarations: [TopCreatorsComponent],
  imports: [CommonModule, TopCreatorsRoutingModule],
  providers: [],
})
export class TopCreatorsModule {}
