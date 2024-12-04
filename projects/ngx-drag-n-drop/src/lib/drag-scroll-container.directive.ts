import { Directive, ElementRef } from '@angular/core'

@Directive({
  selector: '[dragScrollContainer]',
  standalone: true
})
export class DragScrollContainerDirective {
  /**
   * @hidden
   */
  constructor(public elementRef: ElementRef<HTMLElement>) { }
}