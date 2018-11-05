import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Author } from '../author.model'
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'app-author-index',
  templateUrl: './author-index.component.html',
  styleUrls: ['./author-index.component.css']
})
export class AuthorIndexComponent implements OnInit, OnDestroy {
  // {name: "first author", content: "first author's content"},
  // {name: "second author", content: "second author's content"},
  // {name: "third author", content: "third author's content"}
  authors: Author[] = [];
  private authorsSub: Subscription;

  constructor(public authorsService: AuthorsService) {}

  ngOnInit() {
    this.authorsService.getAuthors();
    this.authorsSub = this.authorsService.getAuthorUpdateListener()
      .subscribe((authors: Author[]) => {
        this.authors = authors;
      });
  }

  onDelete(postId: string) {
    this.authorsService.deleteAuthor(postId)
  }

  ngOnDestroy() {
    this.authorsSub.unsubscribe();
  }
}
