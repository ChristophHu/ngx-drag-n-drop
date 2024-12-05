import { Directive, ElementRef } from '@angular/core'

@Directive({
  selector: '[DragScrollContainer]',
  standalone: true
})
export class DragScrollContainerDirective {
  /**
   * @hidden
   */
  constructor(public elementRef: ElementRef<HTMLElement>) { }
}