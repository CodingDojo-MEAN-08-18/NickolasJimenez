import { Component , Input } from '@angular/core';
import { Author } from '../author.model';

@Component({
  selector: 'app-author-edit',
  templateUrl: './author-edit.component.html',
  styleUrls: ['./author-edit.component.css']
})
export class AuthorEditComponent {
  enteredValue = '';
  @Input () authors : Author[]

  onEditAuthor(author) {
    author.name = this.enteredValue;
  }
}
