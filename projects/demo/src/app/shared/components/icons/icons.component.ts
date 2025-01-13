import { Component, ElementRef, Input, Renderer2, ViewEncapsulation } from '@angular/core';
import { Icons } from './icons';

/**
 * This component set the icons from the icons.ts file to the innerHTML of the element. In use of tailwindcss the classes will style the icons.
 * 
 * @example
 * <icons class="w-8 h-8 stroke-1 stroke-current" name="{{ action.icon }}"></icons>
*/
@Component({
  selector: 'icons',
  standalone: true,
  imports: [],
  template: `
    <ng-content></ng-content>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.Emulated
})
export class IconsComponent {
    /**
   * The iconname to get from icons.ts to set to the innerHTML.
   * @type {string}
   */
  @Input() set name(iconName: string) {
    this.renderer.setProperty(this.element.nativeElement,'innerHTML', Icons[iconName] || null)
  }
  
  /**
   * Creates an instance of IconsComponent.
   * @param {ElementRef} element
   * @param {Renderer2} renderer
   * @memberof IconsComponent
   */
  constructor(private element: ElementRef, private renderer: Renderer2) {}
}
