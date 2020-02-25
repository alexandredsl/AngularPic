import { NgModule } from '@angular/core';

import { PhotoListModule } from './components/photo-list/photo-list.module';
import { PhotoFormModule } from './components/photo-form/photo-form.module';
import { PhotoModule } from './classes/photo/photo.module';


@NgModule({
  imports: [
    PhotoListModule,
    PhotoFormModule,
    PhotoModule
  ],
})
export class PhotosModule { }
