class Deck {
  constructor(cards) {
    this.cards = []
  }

  countCards() {
    return this.cards.length;
  }
};

module.exports = Deck;