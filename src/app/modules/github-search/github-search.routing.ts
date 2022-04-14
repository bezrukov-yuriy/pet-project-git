import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { GithubSearchComponent } from './github-search/github-search.component';

const routes: Routes = [
    {
        path: '',
        component: GithubSearchComponent,
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class GithubSearchRoutingModule {
}
