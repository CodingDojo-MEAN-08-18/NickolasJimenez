import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { ActivatedRoute, ParamMap } from '@angular/router';

import { AuthorsService } from '../authors.service';
import { Author } from '../author.model';

@Component({
  selector: 'app-author-create',
  templateUrl: './author-create.component.html',
  styleUrls: ['./author-create.component.css']
})

export class AuthorCreateComponent implements OnInit {
  enteredAuthor = "";
  quote = "";
  author: Author;
  isLoading = false;
  private mode = 'create';
  private authorId: string;

  constructor(public authorsService: AuthorsService, public route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('authorId')) {
        this.mode = 'edit';
        this.authorId = paramMap.get('authorId')
        this.isLoading = true;
        this.authorsService.getAuthor(this.authorId).subscribe(postData => {
          this.isLoading = false;
          this.author = { id: postData._id , name: postData.name }
        });
      } else {
        this.mode = 'create';
        this.authorId = null;
      }
    });
  }

  onSaveAuthor(form: NgForm ) {
    if (form.invalid) {
      return;
    }
    this.isLoading = true;
    if (this.mode === 'create') {
      this.authorsService.addAuthor(form.value.name)
    } else {

      this.authorsService.updateAuthor(this.authorId,form.value.name);
    }

    form.resetForm();
  };
}
