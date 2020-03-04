import { Directive, Input, ElementRef, Renderer, OnInit } from "@angular/core";
import { Photo } from "src/app/photos/classes/photo/photo";
import { UserService } from "src/app/core/user/user.service";

@Directive({
  selector: "[appPhotoOwnerOnly]"
})
export class PhotoOwnerOnlyDirective implements OnInit {
  @Input() ownedPhoto: Photo;

  constructor(
    private element: ElementRef<any>,
    private renderer: Renderer,
    private UserService: UserService
  ) {}

  ngOnInit(): void {
    this.UserService.getUser().subscribe(user => {
      if (!user || user.id != this.ownedPhoto.userId) {
        this.renderer.setElementStyle(
          this.element.nativeElement,
          "display",
          "none"
        );
      }
    });
  }
}
