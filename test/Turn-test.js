const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');

let mockCard = { id: 1,
                 question: 'What is Robbie\'s favorite animal',
                 answers: ['sea otter', 'pug', 'capybara'],
                 correctAnswer: 'sea otter' 
               }

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should have default properties', function() {
    const turn = new Turn('pug', mockCard);
    expect(turn.guess).to.equal('pug');
    expect(turn.card).to.equal(mockCard);
  })

  it('should return guess', function() {
    const turn = new Turn('pug', mockCard);
    expect(turn.returnGuess()).to.equal('pug');
  })

  it('should return card', function() {
    const turn = new Turn('pug', mockCard);
    expect(turn.returnCard()).to.equal(mockCard);
  })

  it('should evaluate the guess', function() {
    const turn = new Turn('pug', mockCard);
    expect(turn.evaluateGuess()).to.equal(false);
  })

  it('should give feedback', function() {
    const turn = new Turn('pug', mockCard);
    expect(turn.giveFeedback()).to.equal('incorrect!');
  })
});