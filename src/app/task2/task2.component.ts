import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component {
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

  image1: any =
    "../assets/ipadany.jpg";
  ipadgold() {
    this.image1 =
      "../assets/ipadgold.jpg";
  }
  ipadsilver() {
    this.image1 =
      "../assets/ipadsilver.jpg";
  }

  ipadmidnight() {
    this.image1 =
      "../assets/ipadmidnight.jpg";
  }

  ipadspacegrey() {
    this.image1 =
      "../assets/ipadspacegray.jpg";
  }

  image2: any =
    "../assets/macdemo.jpg";
  macgold() {
    this.image2 =
      "../assets/macgold.jpg";
  }
  macsilver() {
    this.image2 =
      "../assets/macsilver.jpg";
  }

  macmidnight() {
    this.image2 =
      "../assets/macmidnight.jpg";
  }

  macspacegrey() {
    this.image2 =
      "../assets/macspacegray.jpg";
  }



  onSave(event?: MouseEvent) {
    const evtMsg = event ? ' Thank You! You ' + (event.target as HTMLElement).textContent : '';
    alert('Saved.' + evtMsg);
    if (event) { event.stopPropagation(); }
  }


  clickMessage = '';

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }
}
