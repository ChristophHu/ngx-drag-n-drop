import { Component, ElementRef, ViewChild } from '@angular/core';
import { DragDirective, DropDirective, ValidateDrop } from '../../../../../ngx-drag-n-drop/src/public-api';

@Component({
  selector: 'app-overview',
  imports: [
    DragDirective,
    DropDirective
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.sass'
})
export class OverviewComponent {
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
