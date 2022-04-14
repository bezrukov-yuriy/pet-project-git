import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubSearchComponent } from './github-search/github-search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RepositoryCardComponent } from './repository-card/repository-card.component';
import { GithubSearchRoutingModule } from './github-search.routing';


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

  ]
})
export class GithubSearchModule { }
