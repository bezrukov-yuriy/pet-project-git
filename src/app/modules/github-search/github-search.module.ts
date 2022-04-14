import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubSearchComponent } from './github-search/github-search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RepositoryComponent } from './repository/repository.component';
import { GithubSearchRoutingModule } from './github-search.routing';


@NgModule({
  declarations: [
    GithubSearchComponent,
    RepositoryComponent,
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
