
import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote-display',
  templateUrl: './quote-display.component.html',
  styleUrls: ['./quote-display.component.css']
})
export class QuoteDisplayComponent implements OnInit {
  quotes: Quote[] = [
    new Quote('Emmanuel', 'Dont grieve,everything you lose comes around in another form.', 'Rumi', new Date(2019, 10, 27)),
    new Quote('Shila', 'Insanity: doing the same thing over and over again and expecting different results. ', 'Albert Einstein', new Date())
  ];
  constructor() { }
  num1: number;
  num2: number;
  count: number;

  uploadQuote(myQuote) {
    this.quotes.push(myQuote);
  }

  toggleDescription(index) {
    this.quotes[index].isDescriptionShown = !this.quotes[index].isDescriptionShown;
  }

  deleteQuote(index) {
    confirm('Do you want to delete this quote ?') ? this.quotes.splice(index, 1) : console.log('Not deleted');

  }
  highlightThis(highest) {
    console.log(1);
  }

  addDownVote(index) {
    this.quotes[index].downVotes++;
  }
  addUpVote(index) {
    this.quotes[index].upVotes++;
    // this.checkHighVote();
  }

  checkHighVote() {
    const votesArray: number[] = [];
    for (const quote of this.quotes) {
      votesArray.push(quote.upVotes);
    }
    votesArray.sort();
    console.log(votesArray[votesArray.length - 1]);
    if (votesArray.length - 1 === votesArray.length - 2) {

      return votesArray[votesArray.length - 2];
    }

    return votesArray[votesArray.length - 1];
  }

  ngOnInit() {
  }
}
