import { Directive, ElementRef, Renderer } from "@angular/core";
import { UserService } from "../../../core/user/user.service";

@Directive({
  selector: "[appShowIfLogged]"
})
export class ShowIfLoggedDirective {
  constructor(
    private element: ElementRef<any>,
    private renderer: Renderer,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    !this.userService.isLogged() &&
      this.renderer.setElementStyle(
        this.element.nativeElement,
        "display",
        "none"
      );
  }
}
