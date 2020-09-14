import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes = [
    new Quote(1, 'Excuses Will Turn Your Dreams into Dust', 'Joseph Chiuri', 'Abdi ', 0, 0, new Date(2019, 0, 11)),
    new Quote(2, 'Think about every problem, every challenge, we face. The solution to each starts with education', 'George bush', 'Annie', 0, 0, new Date(2019, 0, 9)),
    new Quote(3, 'What does not kill you makes you stronger', 'Nelson Mandela', 'Brian', 0, 0, new Date(2019, 0, 11)),
  ];


  addNewQuote(quote) {
    this.quotes.push(quote);
  }
  deleteQuote(isComplete, index) {
    if (isComplete) {
      const toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}`);
      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }
  //My methods defined after the properties
  toogleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  upvote(index) {
    this.quotes[index].upvotes++;
  }
  downvote(index) {
    this.quotes[index].downvotes++;
  }
  constructor() { }

  ngOnInit() {
  }

}
