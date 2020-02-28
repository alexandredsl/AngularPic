import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { lowerCaseValidator } from "src/app/shared/validators/lower-case.validator";
import { NewUserValidatorService } from "./new-user.validator.service";
import { NewUser } from "./new-user";
import { Router } from "@angular/router";
import { SignupService } from "./signup.service";
import { PlatformDetectorService } from "src/app/core/platform-detector/platform-detector.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
  providers: [NewUserValidatorService]
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  @ViewChild("emailInput") emailInput: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder,
    private newUserValidatorService: NewUserValidatorService,
    private signUpService: SignupService,
    private router: Router,
    private platformDetectorService: PlatformDetectorService
  ) {}

  ngOnInit() {
    this.platformDetectorService.isPlatformBrowser() &&
      this.emailInput.nativeElement.focus();

    this.signupForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      userName: [
        "",
        [
          Validators.required,
          lowerCaseValidator,
          Validators.minLength(2),
          Validators.maxLength(40)
        ],
        this.newUserValidatorService.checkUserNameTaken()
      ],
      fullName: [
        "",
        [Validators.required, Validators.minLength(2), Validators.maxLength(40)]
      ],
      password: [
        "",
        [Validators.required, Validators.minLength(8), Validators.maxLength(14)]
      ]
    });
  }

  signup() {
    const newUser = this.signupForm.getRawValue() as NewUser;
    this.signUpService.signup(newUser).subscribe(
      () => this.router.navigate([""]),
      err => console.log(err)
    );
  }
}
