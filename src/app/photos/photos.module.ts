import { NgModule } from '@angular/core';

import { PhotoListModule } from './components/photo-list/photo-list.module';
import { PhotoFormModule } from './components/photo-form/photo-form.module';
import { PhotoModule } from './classes/photo/photo.module';
import { PhotoDetailsModule } from './components/photo-details/photo-details.module';


@NgModule({
  imports: [
    PhotoListModule,
    PhotoFormModule,
    PhotoDetailsModule,
    PhotoModule
  ],
})
export class PhotosModule { }
