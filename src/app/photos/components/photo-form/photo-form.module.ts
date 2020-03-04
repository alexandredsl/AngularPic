import { NgModule } from '@angular/core';
import { PhotoFormComponent } from './photo-form.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { VmessageModule } from 'src/app/shared/components/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';
import { PhotoModule } from '../../classes/photo/photo.module';
import { ImmediateClickModule } from 'src/app/shared/diretives/immediate-click/immediate-click.module';

@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule, VmessageModule, FormsModule, RouterModule, PhotoModule, ImmediateClickModule
  ],
  declarations: [PhotoFormComponent]
})
export class PhotoFormModule { }
