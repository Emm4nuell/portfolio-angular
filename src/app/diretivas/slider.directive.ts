import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSlider]'
})
export class SliderDirective {

/*   @HostListener('mouseover')
  onMouseOver() {
    console.log("passando mouse")
  }

  @HostListener('mouseout')
  onMouseOut() {
    console.log("tirando mouse")
  } */

  constructor( private _elementRef: ElementRef, private _renderer2: Renderer2) {
    console.log(this._elementRef.nativeElement.parentElement)
   }

}
