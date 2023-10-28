import {
  Component,
  Input,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core';

import { Observable } from 'rxjs';
import { TopCreator } from '../../models/top-creator.model';
import { CreatorsDataService } from '../../services/creators-data.service';

@Component({
  selector: 'app-top-creators',
  templateUrl: './top-creators.component.html',
  styleUrls: ['./top-creators.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopCreatorsComponent implements OnInit {
  @Input() maxTopCreators = 3;
  topCreators$: Observable<TopCreator[]> | null = null;

  constructor(private creatorsDataService: CreatorsDataService) {}

  ngOnInit(): void {
    this.topCreators$ = this.creatorsDataService.getTopNActiveCreators(
      this.maxTopCreators
    );
  }
}
