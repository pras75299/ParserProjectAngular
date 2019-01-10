import { Component, OnInit } from '@angular/core';
import { MainService } from './main.service';
@Component({
  selector: 'app-parse',
  templateUrl: './parse.component.html',
  styleUrls: ['./parse.component.scss']
})
export class ParseComponent implements OnInit {

  ngOnInit() {
  }

  inputContent  = '';
  outputContent = '';

  constructor(private service: MainService) {}
  // below Method for accessing input file
  fileSelect(event) {

    const input = event.target;
    for (let index = 0; index < input.files.length; index++) {
        const reader = new FileReader();
        reader.onload = () => {
            const text = reader.result;
            this.inputContent = text.toString();
        };
          reader.readAsText(input.files[index]);
          console.log('Got Input File....');
    }
  }

// below Method for getting segment weights & respective result
sevensegment = function (ascii) {
  const lines = ascii.split('\n');
  let textVal = '';

  console.log('Inside sevensegment its working');

  for (let line = 0; line < lines.length; line = line + 2) {
    const arr = [ [], [], [], [], [], [], [], [], [] ]; // A 2D array defined for numbers(9) & segments(7)
    let k = 0;
    if (lines[line] == null || lines[line] === undefined) {
       continue; }
    let a = lines[line].split('');
    for (let i = 1; i < a.length; i++) {
      if (a[i] === '_') {
        arr[k][0] = true;
      }
      i++;
      i++;
      k++;
    }
    if (line < lines.length) {
      line++;
      if (lines[line] == null || lines[line] === undefined) {
        continue; }
      a = lines[line].split('');
      k = 0;
      for (let i = 0; i < a.length; i++) {
        if (a[i] === '|') {
          arr[k][5] = true;
        }
        i++;
        if (a[i] === '_') {
          arr[k][6] = true;
        }
        i++;
        if (a[i] === '|') {
          arr[k][1] = true;
        }
        k++;
      }
    }
    if (line < lines.length) {
      line++;
      if (lines[line] === null || lines[line] === undefined) {
        continue; }
      a = lines[line].split('');
      k = 0;
      for (let i = 0; i < a.length; i++) {
        if (a[i] === '|') {
          arr[k][4] = true;
        }
        i++;
        if (a[i] === '_') {
          arr[k][3] = true;
        }
        i++;
        if (a[i] === '|') {
          arr[k][2] = true;
        }
        k++;
      }
    }
    for (let t = 0; t < arr.length; t++) {
      let result = 0;
      for (let u = 0; u < arr[t].length; u++) {
        if (arr[t][u]) {
          result += Math.pow(2, u); }
      }
      const res = this.getNumber(result) + '';
      textVal += res;
      // console.log(res);
    }
    textVal += '\n\n';
  }
  this.outputContent = textVal;
  return textVal;

};

 getNumber = function (n) {
  switch (n) {
    case 63:
      return '0';
    case 6:
      return '1';
    case 91:
      return '2';
    case 79:
      return '3';
    case 102:
      return '4';
    case 109:
      return '5';
    case 125:
      return '6';
    case 7:
      return '7';
    case 127:
      return '8';
    case 111:
      return '9';
    default:
      return '?';
  }

};

download() {
  alert('inside download function');
  this.service.down();
}


}
