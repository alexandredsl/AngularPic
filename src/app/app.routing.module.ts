import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { NotFoundComponent } from "./errors/not-found/not-found.component";
import { PhotoListComponent } from "./photos/components/photo-list/photo-list.component";
import { PhotoFormComponent } from "./photos/components/photo-form/photo-form.component";
import { PhotoListResolver } from "./photos/components/photo-list/photo-list-resolver";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "home"
  },
  {
    path: "home",
    loadChildren: './home/home.module#HomeModule'
  },

  {
    path: "user/:userName",
    component: PhotoListComponent,
    resolve: {
      photos: PhotoListResolver
    }
  },
  { path: "p/add", component: PhotoFormComponent },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
