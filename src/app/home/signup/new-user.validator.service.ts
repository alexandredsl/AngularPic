import { Injectable } from "@angular/core";
import { SignupService } from "./signup.service";
import { AbstractControl } from "@angular/forms";

import { debounceTime, switchMap, map, first } from "rxjs/operators";

@Injectable()
export class NewUserValidatorService {
  constructor(private signUpService: SignupService) {}
  checkUserNameTaken() {
    return (control: AbstractControl) => {
      return control.valueChanges
        .pipe(debounceTime(300))
        .pipe(
          switchMap(userName => this.signUpService.checkUserNameTaken(userName))
        )
        .pipe(map(isTaken => (isTaken ? { userNameTaken: true } : null)))
        .pipe(first());
    };
  }
}
