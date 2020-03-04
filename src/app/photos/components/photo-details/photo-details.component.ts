import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Photo } from "../../classes/photo/photo";
import { PhotoService } from "../../services/photo.service";
import { Observable } from "rxjs";
import { AlertService } from "src/app/shared/components/alert/alert.service";
import { UserService } from "src/app/core/user/user.service";

@Component({
  selector: "app-photo-details",
  templateUrl: "./photo-details.component.html",
  styleUrls: ["./photo-details.component.css"]
})
export class PhotoDetailsComponent implements OnInit {
  photo$: Observable<Photo>;
  photoId: number;

  constructor(
    private route: ActivatedRoute,
    private photoService: PhotoService,
    private router: Router,
    private alertService: AlertService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    const { route, photoService } = this;

    this.photoId = route.snapshot.params.photoId;
    this.photo$ = photoService.findById(this.photoId);
    this.photo$.subscribe(
      () => {},
      err => {
        console.log(err);
        this.router.navigate(["not-found"]);
      }
    );
  }

  remove() {
    this.photoService.removePhoto(this.photoId).subscribe(
      () => {
        this.alertService.success("Photo removed", true);
        this.router.navigate(["/user", this.userService.getUserName()]);
      },
      err => {
        console.log(err);
        this.alertService.warning("Could not delete the photo!", true);
      }
    );
  }

  like(photo: Photo) {
    this.photoService.like(photo.id).subscribe(liked => {
      if (liked) {
        this.photo$ = this.photoService.findById(this.photoId);
      }
    });
  }
}
