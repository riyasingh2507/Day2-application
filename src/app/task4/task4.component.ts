import { Component } from '@angular/core';

@Component({
  selector: 'app-task4',
  templateUrl: './task4.component.html',
  styleUrls: ['./task4.component.css']
})
export class Task4Component {
  public myclass:string="square";

    selectChangeHandler(event: any) {

      this.myclass = event.target.value;
    }

    public mystyle:string="";
    selectChangeEvent(event: any){
      this.mystyle=event.target.value;
    }


}
