import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { AuthorIndexComponent } from "./authors/author-index/author-index.component";
import { AuthorCreateComponent } from "./authors/author-create/author-create.component";

const routes: Routes = [
  { path: '', component: AuthorIndexComponent },
  { path: 'create', component: AuthorCreateComponent },
  { path: 'edit/:authorId', component: AuthorCreateComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
