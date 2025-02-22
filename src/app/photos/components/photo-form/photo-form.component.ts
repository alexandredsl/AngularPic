import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { PhotoService } from "../../services/photo.service";
import { Router } from "@angular/router";
import { AlertService } from "src/app/shared/components/alert/alert.service";
import { UserService } from "src/app/core/user/user.service";

@Component({
  selector: "app-photo-form",
  templateUrl: "./photo-form.component.html",
  styleUrls: ["./photo-form.component.css"]
})
export class PhotoFormComponent implements OnInit {
  photoForm: FormGroup;
  file: File;
  preview: string;

  constructor(
    private formBuilder: FormBuilder,
    private photoService: PhotoService,
    private router: Router,
    private alertService: AlertService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.photoForm = this.formBuilder.group({
      file: ["", Validators.required],
      description: ["", Validators.maxLength(300)],
      allowComments: [true]
    });
  }

  upload() {
    const { photoService, file, photoForm } = this;
    const { description, allowComments } = photoForm.getRawValue();
    photoService.upload(description, allowComments, file).subscribe(() => {
      this.alertService.success("Upload complete", true);
      this.router.navigate(["/user", this.userService.getUserName()]);
    });
  }

  handleFile(file: File) {
    this.file = file;
    const reader = new FileReader();
    reader.onload = (event: any) => (this.preview = event.target.result);
    reader.readAsDataURL(file);
  }
}
