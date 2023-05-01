import { Component } from '@angular/core';
import { CUSTOMERS } from './customers';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component {
  customers = CUSTOMERS;

  currentName = 'Riya Singh';
  title = 'Task1 of Day2';
  itemImageUrl = '../assets/abc.jpg';

  recommended = 'You might also like:';
  itemImageUrl2 = '../assets/image2.jpg';



  getVal(): number { return 2; }

}
