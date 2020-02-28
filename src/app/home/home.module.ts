import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { SignInComponent } from "./signIn/signIn.component";
import { VmessageModule } from "../shared/components/vmessage/vmessage.module";
import { RouterModule } from "@angular/router";
import { CoreModule } from "../core/core.module";
import { SignupComponent } from "./signup/signup.component";
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home.routing.module";
import { SignupService } from './signup/signup.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    VmessageModule,
    RouterModule,
    CoreModule,
    ReactiveFormsModule,
    HomeRoutingModule
  ],
  declarations: [SignInComponent, SignupComponent, HomeComponent],
  providers: [SignupService]
})
export class HomeModule {}
