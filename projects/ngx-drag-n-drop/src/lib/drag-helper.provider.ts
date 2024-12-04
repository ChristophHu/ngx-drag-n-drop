import { Subject } from 'rxjs'
import { Injectable } from '@angular/core'

export interface CurrentDragData {
  clientX: number
  clientY: number
  dropData: any
  target: EventTarget
}

@Injectable({
  providedIn: 'root'
})
export class DragHelper {
  currentDrag = new Subject<Subject<CurrentDragData>>()
}