import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

import { Author } from './author.model';

@Injectable({providedIn: 'root'})
export class AuthorsService {
  private authors: Author[] = [];
  private authorsUpdated = new Subject<Author[]>()

  constructor(private http: HttpClient, private router: Router) {}

  getAuthors() {
    this.http
    .get<{message: string, authors: any }>(
      'http://localhost:8000/authors/'
    )
    .pipe(map((postData) => {
      return postData.authors.map(author => {
        return {
          name: author.name,
          id: author._id
        }
      })
    }))
    .subscribe((transformedAuthors) => {
      this.authors = transformedAuthors;
      this.authorsUpdated.next([...this.authors]);
    });
  }

  getAuthorUpdateListener() {
    return this.authorsUpdated.asObservable();
  }

  getAuthor(id: string) {
    return this.http.get<{_id: string, name: string}>('http://localhost:8000/authors/' + id);
  }

  addAuthor(name: string) {
    const author: Author = { id: null, name: name };
    this.http
      .post<{message: string, postId: string }>('http://localhost:8000/authors/', author)
      .subscribe((responseData) => {
        const id = responseData.postId;
        author.id = id;
        this.authors.push(author);
        this.authorsUpdated.next([...this.authors]);
        this.router.navigate(['/']);
      });
  }

  updateAuthor(id: string, name: string) {
    const author: Author = { id: id, name: name};
    this.http
      .put('http://localhost:8000/authors/' + id, author)
      .subscribe(response => {
        const updatedAuthors = [...this.authors];
        const oldAuthorIndex = updatedAuthors.findIndex(p => p.id === author.id);
        updatedAuthors[oldAuthorIndex] = author;
        this.authors = updatedAuthors;
        this.authorsUpdated.next([...this.authors]);
        this.router.navigate(['/']);
      });
  }

  deleteAuthor(postId: string) {
    this.http.delete('http://localhost:8000/authors/' + postId)
      .subscribe(() => {
        const updatedAuthors = this.authors.filter(author => author.id !== postId);
        this.authors = updatedAuthors;
        this.authorsUpdated.next([...this.authors]);
      });
  }
}
