import { Component, ElementRef, ViewChild } from '@angular/core'
import { DragDirective, DropDirective, ValidateDrop } from '../../../ngx-drag-n-drop/src/public-api'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    DragDirective,
    DropDirective
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  @ViewChild(DropDirective, { read: ElementRef, static: true }) dropableElement!: ElementRef

  droppedData: string = '1'
  droppedData2: string = '2'  

  onDrop({ dropData }: any): void {
    this.droppedData = dropData
    setTimeout(() => {
      this.droppedData = ''
    }, 2000)
  }

  // validateDrop: ValidateDrop = ({ target }) => this.dropableElement.nativeElement.contains(target as Node)
  validateDrop: ValidateDrop = ({}) => false
}
