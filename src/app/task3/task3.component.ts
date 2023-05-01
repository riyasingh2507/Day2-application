import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.css']
})
export class Task3Component {
  @Output() sizeChange = new EventEmitter<number>();
  fontSizePx = 16;


  dec() { this.resize(-1); }
  inc() { this.resize(+1); }
  resize(delta: number) {
    this.fontSizePx = Math.min(40, Math.max(8, +this.fontSizePx + delta));
    this.sizeChange.emit(this.fontSizePx);
  }

  currentItem:string = '';
}
