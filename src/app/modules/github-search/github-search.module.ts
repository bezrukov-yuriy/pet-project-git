import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatBadgeModule } from '@angular/material/badge';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { GithubSearchComponent } from './github-search/github-search.component';
import { RepositoryCardComponent } from './repository-card/repository-card.component';
import { GithubSearchRoutingModule } from './github-search.routing';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    GithubSearchComponent,
    RepositoryCardComponent,
  ],
  exports: [
    GithubSearchComponent
  ],
  imports: [
    CommonModule,
    GithubSearchRoutingModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatCardModule,
    MatDividerModule,
    MatProgressBarModule,
    MatBadgeModule,
    MatProgressBarModule,
    SharedModule,
  ]
})
export class GithubSearchModule { }
