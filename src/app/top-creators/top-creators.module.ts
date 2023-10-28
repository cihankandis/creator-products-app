import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopCreatorsRoutingModule } from './top-creators-routing.module';
import { TopCreatorsComponent } from './components/top-creators/top-creators.component';
import { CreatorListComponent } from './components/creator-list/creator-list.component';

import { CreatorsApiService } from './services/creators-api.service';
import { CreatorsDataService } from './services/creators-data.service';

@NgModule({
  declarations: [TopCreatorsComponent, CreatorListComponent],
  imports: [CommonModule, TopCreatorsRoutingModule],
  providers: [CreatorsApiService, CreatorsDataService],
})
export class TopCreatorsModule {}
