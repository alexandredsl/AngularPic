import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PhotoDetailsComponent } from "./photo-details.component";
import { PhotoModule } from '../../classes/photo/photo.module';
import { PhotoCommentsComponent } from './photo-comments/photo-comments.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { VmessageModule } from 'src/app/shared/components/vmessage/vmessage.module';
import { PhotoOwnerOnlyDirective } from './photo-owner-only/photo-owner-only.directive';
import { ShowIfLoggedModule } from "../../../shared/diretives/show-if-logged/show-if-logged.module";

@NgModule({
  imports: [CommonModule, PhotoModule, RouterModule, ReactiveFormsModule, VmessageModule, ShowIfLoggedModule],
  declarations: [PhotoDetailsComponent, PhotoCommentsComponent, PhotoOwnerOnlyDirective],
  exports: [PhotoDetailsComponent]
})
export class PhotoDetailsModule {}
