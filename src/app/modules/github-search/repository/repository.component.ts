import { Component, Input } from '@angular/core';
import { Repository } from '../github-search.model';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.scss']
})
export class RepositoryComponent {

  @Input() repository: Repository;

}
