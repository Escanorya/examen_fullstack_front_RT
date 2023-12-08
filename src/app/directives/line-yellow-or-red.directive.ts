import {Directive, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appLineYellowOrRed]',
  standalone: true
})
export class LineYellowOrRedDirective {

  @Input()
  set appLineYellowOrRed(value: string) {
    if (parseInt(value) > 2) {
      this.renderer.setStyle(this.elRef.nativeElement, "color", "yellow");
    } else if (parseInt(value) < 1) {
      this.renderer.setStyle(this.elRef.nativeElement, "color", "red");
    } else {
      this.renderer.setStyle(this.elRef.nativeElement, "color", "black");
    }
  }

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
  }

}
