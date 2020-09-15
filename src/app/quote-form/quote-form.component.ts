import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})

export class QuoteFormComponent implements OnInit {

@Input() quote: Quote;
@Output() addQuote = new EventEmitter<Quote>();
newquote = new Quote(0, ' ', ' ', ' ', 0, 0, new Date() );

submitQuote () {
  alert('form submitted');
  this.addQuote.emit(this.newquote);
}
  constructor() { }

  ngOnInit() {
  }

}
