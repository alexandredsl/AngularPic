import { Component, OnInit, Input } from "@angular/core";
import { Observable } from "rxjs";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { switchMap, tap } from "rxjs/operators";

import { PhotoComment } from "src/app/photos/classes/photo/photo-comment";
import { PhotoService } from "src/app/photos/services/photo.service";

@Component({
  selector: "app-photo-comments",
  templateUrl: "./photo-comments.component.html",
  styleUrls: ["./photo-comments.component.css"]
})
export class PhotoCommentsComponent implements OnInit {
  @Input() photoId: number;
  commentForm: FormGroup;

  comments$: Observable<PhotoComment[]>;

  constructor(
    private photoService: PhotoService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    console.log(this.photoId);
    this.comments$ = this.photoService.getComments(this.photoId);
    this.commentForm = this.formBuilder.group({
      comment: ["", Validators.maxLength(300)]
    });
  }

  save() {
    const comment = this.commentForm.get("comment").value as string;
    this.comments$ = this.photoService
      .addComment(this.photoId, comment)
      .pipe(switchMap(() => this.photoService.getComments(this.photoId)))
      .pipe(
        tap(() => {
          this.commentForm.reset();
        })
      );
  }
}
