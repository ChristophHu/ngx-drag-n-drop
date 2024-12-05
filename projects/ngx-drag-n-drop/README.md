# Dynamic Table

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.0.

## Demo

[Demo](https://christophhu.github.io/ngx-drag-n-drop/)

## Use
```html
<div Dragable dropData="foo" dragActiveClass="drag-active" [dragAxis]="{y: true, x: true}" [touchStartLongPress]="{ delay: 300, delta: 30 }">
  Drag me!
</div>
<div Dragable dropData="bar" dragActiveClass="drag-active" [dragSnapGrid]="{ x: 20, y: 20 }" [touchStartLongPress]="{ delay: 300, delta: 30 }">
  I snap to a 20 x 20 grid
</div>
<div Dropable (drop)="onDrop($event)" dragOverClass="drop-over-active">
  <span [hidden]="droppedData">Drop here</span>
  <span [hidden]="!droppedData">Item dropped here with data: "{{ droppedData }}"!</span>
</div>
<div Dropable (drop)="onDrop($event)" dragOverClass="drop-over-active" [validateDrop]="validateDrop" class="validate-drop">
  <span>Drop here2</span>
</div>
```

```typescript
import { Component, ElementRef, ViewChild } from '@angular/core'
import { DragDirective, DropDirective, ValidateDrop } from '@christophhu/ngx-drag-n-drop'

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

export class Component {
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
```

```sass
:host 
  display: flex

[Dragable] 
  background-color: red
  width: 200px
  height: 200px
  position: relative
  z-index: 2
  float: left
  margin-right: 10px
  cursor: move

[Dropable] 
  background-color: green
  width: 400px
  height: 400px
  z-index: 1
  position: relative
  top: 50px
  left: 100px

.validate-drop 
  left: 150px

[Dragable],
[Dropable] 
  color: white
  text-align: center
  display: flex
  align-items: center
  justify-content: center

.drop-over-active 
  border: dashed 1px black
  background-color: lightgreen

.drag-active 
  z-index: 3

.floating-toolbar 
  position: absolute
  top: 140px
  z-index: 2
  width: 250px
  height: 75px
  background: yellow
  display: flex
  align-items: center
  justify-content: center

.floating-toolbar-1
  left: 600px

.floating-toolbar-2
  left: 1050px
```