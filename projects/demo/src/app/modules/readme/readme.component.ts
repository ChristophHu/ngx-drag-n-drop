import { Component, ViewEncapsulation } from '@angular/core';
import { MarkdownComponent } from 'ngx-markdown';
import { GithubService } from '../../core/services/github.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-readme',
  imports: [
    AsyncPipe,
    MarkdownComponent
  ],
  templateUrl: './readme.component.html',
  styleUrl: './readme.component.sass',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ReadmeComponent {
  repos$: Observable<any>
  this_repo$: Observable<any>
  user$: Observable<any>

  constructor(private githubService: GithubService) {
      this.repos$ = this.githubService.repos$
      this.this_repo$ = this.githubService.this_repo$
      this.user$ = this.githubService.user$
    }
}
