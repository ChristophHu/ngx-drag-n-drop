import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, of, take, tap } from 'rxjs';
import packageJson from '../../../../../../package.json'

interface DataState {
  data      : any
  timestamp : Date | null
  loaded    : boolean
}
@Injectable({
  providedIn: 'root'
})
export class GithubService {
  apiURL = 'https://api.github.com'
  username: string = 'christophhu'

  this_repo: string = packageJson.name
  version: string = packageJson.version

  TOKEN = 'github_pat_...'
  TOKEN_ORG = 'github_pat_...'

  private readonly initialState: DataState = { data: null, timestamp: null, loaded: false }

  private readonly _repos = new BehaviorSubject<DataState>(this.initialState)
  repos$: Observable<any> = this._repos.asObservable()

  private readonly _this_repo = new BehaviorSubject<DataState>(this.initialState)
  this_repo$: Observable<any> = this._this_repo.asObservable()

  private readonly _user = new BehaviorSubject<DataState>(this.initialState)
  user$: Observable<any> = this._user.asObservable()
  
  header = {
    headers: {
      // Accept: "application/vnd.github.v3.raw+json", "Content-Type": "application/json;charset=UTF-8",
      // Authorization: `token ${this.TOKEN}`,
    },
  }
  header_org = {
    headers: {
      // Accept: "application/vnd.github.v3.raw+json", "Content-Type": "application/json;charset=UTF-8",
      // Authorization: `token ${this.TOKEN_ORG}`,
    },
  }

  constructor(private http: HttpClient) {
    this.getRepos(this.username).pipe(
      take(1),
      // tap(data => console.log('repos', JSON.parse(JSON.stringify(data)))),
      map((data: any) => { this._repos.next({ data, timestamp: new Date(), loaded: true }); return of(data) })
    ).subscribe()
    this.getRepo(this.username, this.this_repo)
      .pipe(
        take(1),
        map((data: any) => { this._this_repo.next({ data, timestamp: new Date(), loaded: true }); return of(data) })
      )
      .subscribe()
    this.getSingleUser(this.username).pipe(
      take(1),
      // tap(data => console.log('user', JSON.parse(JSON.stringify(data)))),
      map((data: any) => { this._user.next({ data, timestamp: new Date(), loaded: true }); return of(data) })
    ).subscribe()
  }

  getSingleUser(username: string) {
    return this.http.get(`${this.apiURL}/users/${username}`, this.header)
  }
  getRepo(username: string, repo: string, header = this.header) {
    return this.http.get(`${this.apiURL}/repos/${username}/${repo}`, this.header)
  }
  getRepos(username: string) {
    return this.http.get(`${this.apiURL}/users/${username}/repos?per_page=3`, this.header).pipe(take(1))
  }

  getThisRepo(): string {
    return this.this_repo
  }
  getVersion(): string {
    return this.version
  }

  // getEvents(username: string) {
  //   return this.http.get(`${this.apiURL}/users/${username}/events`, this.header).pipe(take(1))
  // }
  // getRecentUpdates(top: number) {
  //   this.events$
  //   .pipe(take(1))
  //   .subscribe(data => {
  //     let repos: any[] = []
  //     console.log('event data', data)
  //     if (data) {
  //       data.forEach((repo: any) => {
  //         if (repo.type == 'PushEvent') repos.push(repo.repo.name)
  //       })
  //     }
  //     Array.from(new Set(repos)).slice(0, top).forEach(repo => {
  //       this.getRepo(repo).pipe(take(1)).subscribe({
  //         next: data => {
  //           console.log('repo', data)
  //         },
  //         error: error => {
  //           this.getRepo(repo, this.header_org).pipe(take(1)).subscribe({
  //             next: data => {
  //               console.log('repo', data)
  //             },
  //             error: error => {
  //               console.error('error', error)
  //             }
  //           })
  //         }
  //       })
  //     })
  //     console.log('repos', Array.from(new Set(repos)).slice(0, top))
  //     this.topEvents$ = of(Array.from(new Set(repos)).slice(0, top))
  //   })
  // }
}
