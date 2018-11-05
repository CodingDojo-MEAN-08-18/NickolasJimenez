import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatCardModule, MatButtonModule, MatProgressSpinnerModule } from '@angular/material';
import { AppComponent } from './app.component';
import { AuthorCreateComponent } from './authors/author-create/author-create.component';
import { AuthorEditComponent } from './authors/author-edit/author-edit.component';
import { AuthorIndexComponent } from './authors/author-index/author-index.component';
import { AuthorsService } from './authors/authors.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AuthorCreateComponent,
    AuthorEditComponent,
    AuthorIndexComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  providers: [AuthorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
