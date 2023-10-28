import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TopCreator } from '../../models/top-creator.model';

@Component({
  selector: 'app-creator-list',
  templateUrl: 'creator-list.component.html',
  styleUrls: ['./creator-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreatorListComponent {
  @Input() topCreators: TopCreator[] | null = null;

  trackByFn(index: number, item: TopCreator): string {
    return item.user.id;
  }
}
