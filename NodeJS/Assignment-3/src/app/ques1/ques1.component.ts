import { Component } from '@angular/core';

@Component({
  selector: 'ques1',
  templateUrl: './ques1.component.html',
  styleUrls: ['./ques1.component.css']
})
export class Ques1Component {
  IntValue:number = 10;
  StringValue:string = 'Hola Amigo! Kese ho Thik Ho?';
  DateValue:Date = new Date();
  ArrayValue:string[] = ["IT","ICT","Architecture"];

inputoption:string = '';

  

}
