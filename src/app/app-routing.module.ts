import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './components/post/post.component';
import { PostListsComponent } from "./components/post-lists/post-lists.component";
import { NotFoundComponent } from './components/not-found/not-found.component';


const routes: Routes = [
    { path: "posts", component: PostListsComponent },
    { path: "posts/:id", component: PostComponent },
    { path: "", pathMatch: "full", redirectTo: "posts" },
    { path: "**", pathMatch: "full", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
