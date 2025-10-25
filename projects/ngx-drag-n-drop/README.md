# ngx-drag-n-drop

## Demo
<p align="center">
  <a href="https://christophhu.github.io/ngx-drag-n-drop"><img src="https://github.com/ChristophHu/ChristophHu/blob/main/assets/img/ngx-drag-n-drop.png" width="500" alt="image" /></a>
</p>

## Description
This repository is a demo application built with Angular 20, showcasing the drag-n-drop library. The library is a simple and lightweight Angular directive that allows you to drag and drop elements in your application. The library is easy to use and can be customized to fit your needs. The library is open-source and free to use in your projects.

## Frameworks and Languages
<p align="left">
    <img alt="Static Badge" src="https://img.shields.io/badge/20.3.7-000000?style=for-the-badge&logo=angular&logoColor=white&label=Angular&labelColor=000000"><br>
  <img alt="Static Badge" src="https://img.shields.io/badge/3.4.17-000000?style=for-the-badge&logo=tailwindcss&logoColor=white&label=Tailwind&labelColor=06B6D4&color=000000"><br>
  <img alt="Static Badge" src="https://img.shields.io/badge/5.9.3-000000?style=for-the-badge&logo=typescript&logoColor=white&label=Typescript&labelColor=007ACC&color=000000">
</p>

## Installation
To run this project, you need to have Node.js installed on your machine. Clone the repository and run the following commands:

```bash
npm install @christophhu/ngx-drag-n-drop
```

## Usage
In the View, add the following code:
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

Import the library in the module and add some logic in the component:
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

Add the styles in the SASS file:
```scss
:host
  @apply flex

[Dragable]
  @apply relative h-40 w-40 mr-4 bg-accent rounded-lg z-10 cursor-move

[Dropable]
  @apply relative h-64 w-64 bg-accent_darker opacity-50 rounded-lg z-20

.validate-drop
  @apply ml-4

[Dragable],
[Dropable]
  @apply flex text-dark text-center items-center justify-center

.drop-over-active
  @apply bg-accent_lighter

.drag-active
  @apply z-40
```

## License
This project is licensed under the MIT License.

The MIT License (MIT)
Copyright © 2024 <copyright holders>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
