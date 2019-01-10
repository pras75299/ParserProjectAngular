import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-marco',
  templateUrl: './marco.component.html',
  styleUrls: ['./marco.component.scss']
})
export class MarcoComponent implements OnInit {
  constructor() { }

  ngOnInit() {

  }

  playMarco (number) {
    let value = '';
    for (let i = 1; i <= number; i++) {
      if (i % 4 === 0 && i % 7 === 0) {
      value += 'marcopolo';
      } else if (i % 4 === 0) {
        value += 'marco';
           } else if (i % 7 === 0) {
        value += 'polo';
           } else {
        value += i;
           }
      value += ',';
      }
      value = value.substring(0, value.length - 1);
      console.log(value);
    return value;
    }




}
