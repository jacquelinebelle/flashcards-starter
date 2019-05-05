class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard = {};
    this.turns = 0;
    this.correctGuesses = [];
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck[this.turns];
  }

  takeTurn() {
    this.turns++;
    this.currentCard = this.deck[(this.turns + 1)]
    let turn = new Turn(guess, this.currentCard);
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(currentCard.id)
      return turn.giveFeedback();
    } else {
      return turn.giveFeedback();
    }
  }

  calculatePercentCorrect() {
    return (this.correctGuesses.length / this.turns) * 100;
  }

  endRound() {
    console.log(`** Round over! ** You answered ${calculatePercentCorrect()}% of the questions correctly!`);
  }
}

module.exports = Round;