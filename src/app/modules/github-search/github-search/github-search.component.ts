import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, filter, iif, map, merge, Observable, of, share, skip, Subject, switchMap, take, takeUntil, tap, timer } from 'rxjs';
import { Repository, RepositoryResponse } from '../github-search.model';
import { GithubSearchService } from '../github-search.service';


@Component({
  selector: 'app-github-search',
  templateUrl: './github-search.component.html',
  styleUrls: ['./github-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GithubSearchComponent implements OnInit, OnDestroy {

  form: FormGroup;
  repositoryList$: Observable<Repository[]>;
  error: string;
  loading$ = new Subject<boolean>();
  readonly searchControlName = 'search-text';
  readonly timeBeforeLoader = 1000;

  private onDestroy$ = new Subject();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private githubSearchService: GithubSearchService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.bindFormChanges();
  }

  ngOnDestroy(): void {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }

  private bindFormChanges(): void {
    let isRequestComplete = false;
    this.repositoryList$ = this.form.controls[this.searchControlName].valueChanges
      .pipe(
        takeUntil(this.onDestroy$),
        tap(searchText => {
          this.setQuery(searchText);
          isRequestComplete = false;
          this.error = '';
        }),
        switchMap((searchText: string) => iif(() => searchText?.length > 2,
          merge(
            timer(this.timeBeforeLoader).pipe(
              tap(() => {
                if (!isRequestComplete) {
                  this.loading$.next(true);
                }
              })
            ),
            this.githubSearchService.getRepositoryList(searchText),
          )
            .pipe(
              filter(res => res !== 0),
              map(res => {
                isRequestComplete = true;
                this.loading$.next(false);
                return <RepositoryResponse>res;
              })),
          of({ items: [] })
        )

        ),
        catchError(e => {
          this.error = e;
          return of({ items: [] });
        }),
        map(res => res.items),
        share(),
      );
  }

  private initForm(): void {

    this.form = new FormGroup({
      [this.searchControlName]: new FormControl(''),
    });

    this.activatedRoute.queryParams
      .pipe(
        takeUntil(this.onDestroy$),
        skip(1),
        take(1),
      )
      .subscribe(params => {
        if (typeof params['q'] === 'string') {
          this.form.controls[this.searchControlName].setValue(params['q']);
        }
      });
  }

  setQuery(searchText: string): void {
    this.router.navigate(
      [],
      {
        relativeTo: this.activatedRoute,
        queryParams: { q: searchText },
        queryParamsHandling: 'merge'
      });
  }

}
