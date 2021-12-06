import { Human } from '../src/js/calculator.js';

describe('Human', () => {
  let human;

  beforeEach(() => {
    human = new Human('Rosa',30,80);
  })

  test ('should create a person object with the name Rosa', () => {
    expect(human.name).toEqual('Rosa');
  })
  test ('should create a person object with an age of 30', () => {
    expect(human.age).toEqual(30);
  })
  test ('should create a person object with an age of days of 10950', () => {
    expect(human.ageInDays).toEqual(10950);
  })
})


describe('mercurify', () => {
  let human;

  beforeEach(() => {
    human = new Human('Rosa',30,80);
  })

  test ('should create a person object with a Mercury age of 124', () => {
    human.mercurify();
    expect(human.mercuryAge).toEqual(124);
  })
  test ('should create a person object with a Mercury expectancy of -44', () => {
    human.mercurify();
    expect(human.mercuryExpectancy).toEqual(-44);
  })
  test ('should return mercuryResult as written in calculator.js', () => {
    human.mercurify();
    expect(human.mercuryResult).toEqual(human.name + " would be " + human.mercuryAge + " years old on planet Mercury!");
  })
  test ('should return deathText as written in calculator.js', () => {
    human.mercurify();
    expect(human.deathText).toEqual("RIP " + human.name + ". They died " + human.mercuryDeath + " years ago.");
  })
  test ('should return expectancyText as written in calculator.js', () => {
    let otherHuman;
    otherHuman = new Human('Gustav', 10, 75);
    otherHuman.mercurify();
    expect(otherHuman.expectancyText).toEqual(otherHuman.name + " has " + otherHuman.mercuryExpectancy + " years left. Make it count!");
  })
})


describe('venusify', () => {
  let human;

  beforeEach(() => {
    human = new Human('Rosa',30,80);
  })

  test ('should create a person object with a Venus age of 48', () => {
    human.venusify();
    expect(human.venusAge).toEqual(48);
  })
  test ('should create a person object with a Venus expectancy of 32', () => {
    human.venusify();
    expect(human.venusExpectancy).toEqual(32);
  })
  test ('should return venusResult as written in calculator.js', () => {
    human.venusify();
    expect(human.venusResult).toEqual(human.name + " would be " + human.venusAge + " years old on planet Venus!");
  })
  test ('should return deathText as written in calculator.js', () => {
    let otherHuman;
    otherHuman = new Human('Ernest', 60, 75);
    otherHuman.venusify();
    expect(otherHuman.deathText).toEqual("RIP " + otherHuman.name + ". They died " + otherHuman.venusDeath + " years ago.");
  })
  test ('should return expectancyText as written in calculator.js', () => {
    human.venusify();
    expect(human.expectancyText).toEqual(human.name + " has " + human.venusExpectancy + " years left. Make it count!");
  })
})


describe('marsify', () => {
  let human;

  beforeEach(() => {
    human = new Human('Rosa',30,80);
  })

  test ('should create a person object with a mars age of 15', () => {
    human.marsify();
    expect(human.marsAge).toEqual(15);
  })
  test ('should create a person object with a mars expectancy of 65', () => {
    human.marsify();
    expect(human.marsExpectancy).toEqual(65);
  })
  test ('should return marsResult as written in calculator.js', () => {
    human.marsify();
    expect(human.marsResult).toEqual(human.name + " would be " + human.marsAge + " years old on planet Mars!");
  })
  test ('should return deathText as written in calculator.js', () => {
    let otherHuman;
    otherHuman = new Human('Ernest', 200, 75);
    otherHuman.marsify();
    expect(otherHuman.deathText).toEqual("RIP " + otherHuman.name + ". They died " + otherHuman.marsDeath + " years ago.");
  })
  test ('should return expectancyText as written in calculator.js', () => {
    human.marsify();
    expect(human.expectancyText).toEqual(human.name + " has " + human.marsExpectancy + " years left. Make it count!");
  })
})


describe('jupitify', () => {
  let human;

  beforeEach(() => {
    human = new Human('Rosa',30,80);
  })

  test ('should create a person object with a jupiter age of 2', () => {
    human.jupitify();
    expect(human.jupiterAge).toEqual(2);
  })
  test ('should create a person object with a jupiter expectancy of 78', () => {
    human.jupitify();
    expect(human.jupiterExpectancy).toEqual(78);
  })
  test ('should return jupiterResult as written in calculator.js', () => {
    human.jupitify();
    expect(human.jupiterResult).toEqual(human.name + " would be " + human.jupiterAge + " years old on planet Jupiter!");
  })
  test ('should return deathText as written in calculator.js', () => {
    let otherHuman;
    otherHuman = new Human('Ernest', 50000, 75);
    otherHuman.jupitify();
    expect(otherHuman.deathText).toEqual("RIP " + otherHuman.name + ". They died " + otherHuman.jupiterDeath + " years ago.");
  })
  test ('should return expectancyText as written in calculator.js', () => {
    human.jupitify();
    expect(human.expectancyText).toEqual(human.name + " has " + human.jupiterExpectancy + " years left. Make it count!");
  })
})
