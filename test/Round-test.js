const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Card = require('../src/Card');
const Turn = require('../src/Turn');

const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');


describe ('Round', function() {

  it('should return the current card', function() {
    const round = new Round();
    round.deck.push(card1, card2, card3);

    expect(round.returnCurrentCard()).to.equal(card1);
  });

  it.skip('should record incorrect guesses', function() {
    const round = new Round();
    const turn = new Turn('pug', card1);

    turn.evaluateGuess();

    expect(round.incorrectGuesses).to.deep.equal(['pug']);

  });
});