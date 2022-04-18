import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { RepositoryResponse } from './github-search.model';

const COUNT_REPOSITORY_ON_PAGE = 20

@Injectable({
  providedIn: 'root'
})
export class GithubSearchService {

  constructor(private http: HttpClient) { }

  getRepositoryList(name: string): Observable<RepositoryResponse> {
    const params = {
      per_page: COUNT_REPOSITORY_ON_PAGE,
      q: name
    };
    return this.http.get<RepositoryResponse>(environment.urls.getRepositoryList, { params });
  }

}
