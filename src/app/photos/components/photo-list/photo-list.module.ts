import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PhotoListComponent } from "./photo-list.component";
import { PhotosComponent } from "./photos/photos.component";
import { LoadButtonComponent } from "./load-button/load-button.component";
import { FilterByDescriptionPipe } from "./filter-by-description.pipe";
import { PhotoModule } from "../../classes/photo/photo.module";
import { CardModule } from "src/app/shared/components/card/card.module";
import { SearchComponent } from "./search/search.component";
import { DarkenonHoverModule } from "src/app/shared/diretives/darken-on-hover/darken-on-hover.module";
import { CoreModule } from "src/app/core/core.module";
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    PhotoModule,
    CardModule,
    DarkenonHoverModule,
    CoreModule,
    RouterModule
  ],
  declarations: [
    PhotoListComponent,
    PhotosComponent,
    LoadButtonComponent,
    FilterByDescriptionPipe,
    SearchComponent
  ]
})
export class PhotoListModule {}
