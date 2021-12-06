export class Human {
  constructor(name, age, expectancy){
    this.name = name;
    this.age = age;
    this.ageInDays = this.age * 365;
    this.expectancy = expectancy;
  }
  mercurify(){
    this.mercuryAge = Math.floor(this.ageInDays / 88);
    this.mercuryExpectancy = this.expectancy - this.mercuryAge;
    this.mercuryDeath = this.mercuryAge - this.expectancy;
    this.mercuryResult = this.name + " would be " + this.mercuryAge + " years old on planet Mercury!"
    if (this.mercuryExpectancy > 0) {
      this.deathText = false
      this.expectancyText = this.name + " has " + this.mercuryExpectancy + " years left. Make it count!";
    } else {
      this.expectancyText = false
      this.deathText = "RIP " + this.name + ". They died " + this.mercuryDeath + " years ago.";
    }
  }
  venusify(){
    this.venusAge = Math.floor(this.ageInDays / 225);
    this.venusExpectancy = this.expectancy - this.venusAge;
    this.venusDeath = this.venusAge - this.expectancy;
    this.venusResult = this.name + " would be " + this.venusAge + " years old on planet Venus!"
    if (this.venusExpectancy > 0) {
      this.deathText = false
      this.expectancyText = this.name + " has " + this.venusExpectancy + " years left. Make it count!";
    } else {
      this.expectancyText = false
      this.deathText = "RIP " + this.name + ". They died " + this.venusDeath + " years ago.";
    }
  }
  marsify(){
    this.marsAge = Math.floor(this.ageInDays / 687);
    this.marsExpectancy = this.expectancy - this.marsAge;
    this.marsDeath = this.marsAge - this.expectancy;
    this.marsResult = this.name + " would be " + this.marsAge + " years old on planet Mars!"
    if (this.marsExpectancy > 0) {
      this.deathText = false
      this.expectancyText = this.name + " has " + this.marsExpectancy + " years left. Make it count!";
    } else {
      this.expectancyText = false
      this.deathText = "RIP " + this.name + ". They died " + this.marsDeath + " years ago.";
    }
  }
  jupitify(){
    this.jupiterAge = Math.floor(this.ageInDays / 4380);
    this.jupiterExpectancy = this.expectancy - this.jupiterAge;
    this.jupiterDeath = this.jupiterAge - this.expectancy;
    this.jupiterResult = this.name + " would be " + this.jupiterAge + " years old on planet Jupiter!"
    if (this.jupiterExpectancy > 0) {
      this.deathText = false
      this.expectancyText = this.name + " has " + this.jupiterExpectancy + " years left. Make it count!";
    } else {
      this.expectancyText = false
      this.deathText = "RIP " + this.name + ". They died " + this.jupiterDeath + " years ago.";
    }
  }
};

// const naMale = 77
// const naFemale = 81
// const saFemale = 80
// const saMale = 72
// const asiaMale = 71
// const asiaFemale = 75
// const europeMale = 75
// const europeFemale = 82
// const oceaniaMale = 77
// const oceaniaFemale = 81
// const africaMale = 63
// const africaFemale = 66