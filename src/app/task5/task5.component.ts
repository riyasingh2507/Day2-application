import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-task5',
  templateUrl: './task5.component.html',
  styleUrls: ['./task5.component.css']
})
export class Task5Component {
  public myclass:string="square";

    selectChangeHandler(event: any) {

      this.myclass = event.target.value;
    }

    public mystyle:string="";
    selectChangeEvent(event: any){
      this.mystyle=event.target.value;
    }

    @Output() sizeChange = new EventEmitter<number>();
    fontSizePx = 16;


    dec() { this.resize(-1); }
    inc() { this.resize(+1); }
    resize(delta: number) {
      this.fontSizePx = Math.min(40, Math.max(8, +this.fontSizePx + delta));
      this.sizeChange.emit(this.fontSizePx);
    }

    currentItem = { name: 'teapot'  };
    getValue(event: Event): string {
      return (event.target as HTMLInputElement).value;
    }



    image: any =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTEVY7_oYz24UXM4Z15YgKhX21F-aTUBm9xR46tLgj2Ox4Mkh_w&usqp=CAU";
  gold() {
    this.image =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTMXgK3LAKOoot-wUnzrUFPg2q4A__PbvoxKBE-iJKZOFcRKqsl&usqp=CAU";
  }
  silver() {
    this.image =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ1gx9WC3BVjG4KYK1v8b2uBPjpughgJpYrJhIsHxbav8DPAMy-&usqp=CAU";
  }

  midnight() {
    this.image =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR3CIz-oYt40ekYXw7CLGLfePl3B9Y5CWJW8-SZ7AZ9_WqWDSuQ&usqp=CAU";
  }

  spacegrey() {
    this.image =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTuM7Ws8HBB1gyxb_fAmT9_k75SFH4dT2y4UcIll60HtL1F6pJQ&usqp=CAU";
  }

  onSave(event?: MouseEvent) {
    const evtMsg = event ? ' Thank You! You ' + (event.target as HTMLElement).textContent : '';
    alert('Saved.' + evtMsg);
    if (event) { event.stopPropagation(); }
  }


  clickMessage = '';
  getData(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }
}
