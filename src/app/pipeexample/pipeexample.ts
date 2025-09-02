import {
  CurrencyPipe,
  DatePipe,
  JsonPipe,
  LowerCasePipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipeexample',
  imports: [
    UpperCasePipe,
    LowerCasePipe,
    TitleCasePipe,
    JsonPipe,
    CurrencyPipe,
    DatePipe
  ],
  templateUrl: './pipeexample.html',
  styleUrl: './pipeexample.css',
})
export class Pipeexample {
  firstname: string = 'girija';
  middlename: string = 'SHANKAR';
  lastname = 'gIrI';

  empObj = {
    empname: 'Bitu',
    age: 26,
    mobileNo: '8249792876',
  };

  price: number = 799.0;

  currentDate: Date = new Date();
}
