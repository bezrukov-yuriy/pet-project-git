import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Repository } from '../github-search.model';

@Component({
  selector: 'app-repository-card',
  templateUrl: './repository-card.component.html',
  styleUrls: ['./repository-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RepositoryCardComponent {

  @Input() repository: Repository;

}
