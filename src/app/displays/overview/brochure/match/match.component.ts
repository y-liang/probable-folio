import { Component, OnInit } from '@angular/core';
interface Card {
  kind: string;
  up: boolean;
  found: boolean;
}

interface Overlay {
  kind: string;
  shown: boolean;
}

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.less']
})
export class MatchComponent implements OnInit {
  // colors = ['red', 'orange', 'yellow'];

  colors = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'purple', 'grey'];
  moments = { start: 'start', loss: 'loss', win: 'win' };

  cards: Card[] = [];
  overlays: Overlay[] = [];

  cardToCheck: Card;
  cardsMatched = [];

  isBusy: boolean = true;

  // timer;
  timeLeft: number;
  flipCount: number;
  timer;

  constructor() { }

  ngOnInit(): void {
    let cardsOne = this.colors.map(color => ({ kind: color, up: false, found: false }));
    let cartsTwo = this.colors.map(color => ({ kind: color, up: false, found: false }));

    this.cards = [...cardsOne, ...cartsTwo]; // double the cards
    console.log(this.cards);

    for (let moment in this.moments) {
      this.overlays.push({ kind: moment, shown: false });
    }
    console.log(this.overlays);

    this.toggleOverlay(true, this.moments.start);

  }

  setCardClass(card: Card): string {
    return ['card',
      card.kind,
      card.up ? 'visible' : null,
      card.found ? 'matched' : null].join(' ');
  }

  // use isBusy to prevent users click when showing the overlays with timeout
  toggleOverlay(on: boolean, moment: string) {
    // isBusy is true when loaded
    switch (on) {
      case true:
        this.isBusy = true;
        setTimeout(() => {
          this.overlays.map(overlay => {
            overlay.kind == moment ? overlay.shown = true : null;
          });
          this.isBusy = false;
        }, 1000);
        break;

      case false:
        if (this.isBusy == false) {
          this.overlays.map(overlay => {
            overlay.kind == moment ? overlay.shown = false : null;
          });

          this.startGame();
          break;
        }
    }

  }

  startGame() {
    // close all the cards and shuffle them
    this.cards.map(card => { card.up = false; });
    this.shuffleCards(this.cards);
    this.cardsMatched = [];
    this.timeLeft = 60;
    this.flipCount = 0;
    // clean plate

    console.log(this.cards);

    setTimeout(() => { this.startCountdown(); }, 500);
  }

  shuffleCards(array: Card[]) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  startCountdown() {
    this.timer = setInterval(() => {
      this.timeLeft -= 1;
      this.timeLeft == 0 ? this.gameOver(this.moments.loss) : null;
    }, 1000);
  }


  gameOver(result: string) {
    console.log(typeof this.timer); // number

    clearInterval(this.timer);
    this.toggleOverlay(true, result);
  }


  runCard(card: Card, index: number) {
    console.log(this.isBusy);
    console.log(this.cardToCheck);

    if (
      // card can be flipped under conditions below
      this.isBusy == false
      && !this.cardsMatched.includes(card)
      && card !== this.cardToCheck
    ) {
      this.flipCount += 1;

      this.cards[index].up = true;

      // cardToCheck is always up

      if (!this.cardToCheck) {
        // no cardToCheck yet, this card becomes it
        this.cardToCheck = card;

      } else {
        card.kind == this.cardToCheck.kind ?
          this.isMatch(card) : this.isMix(card);

      }

    }
  }

  isMatch(card: Card) {
    console.log('match');
    this.isBusy = true;


    console.log('this.cardToCheck');
    console.log(this.cardToCheck);

    this.cardsMatched.push(card, this.cardToCheck);

    // this.cardToCheck.found = true;
    // this.cardToCheck = null;



    console.log('this.cardToCheck');
    console.log(this.cardToCheck);


    setTimeout(() => {
      this.isBusy = false;

      this.cardToCheck.found = true;
      this.cardToCheck = null;

      card.up = true;
      card.found = true;
    }, 500);


    // win
    if (this.cardsMatched.length == this.cards.length) {
      setTimeout(() => {
        this.gameOver(this.moments.win);
      }, 1000); // buffer time
    }
  }

  isMix(card: Card) {
    console.log('mix');
    this.isBusy = true;

    console.log('this.cardToCheck');
    console.log(this.cardToCheck);

    setTimeout(() => {
      this.isBusy = false;
      card.up = false;
      this.cardToCheck.up = false;
      this.cardToCheck = null;

    }, 500);

    console.log('this.cardToCheck');
    console.log(this.cardToCheck);
  }


}
