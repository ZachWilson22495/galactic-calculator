export function calculate() {

  let age = 26;
  let ageInDays = age * 365 ;
  let mercuryAge = Math.floor(ageInDays / 88);
  let venusAge = Math.floor(ageInDays / 225);
  let marsAge = Math.floor(ageInDays / 687);
  let jupiterAge = Math.floor(ageInDays / 4383);

}

export function expectency() {
  let age = 26;
  let sex = 'male';
  let continent = 'northAmerica';
  let deadline = 0;
  if (sex === 'male' && continent === 'northAmerica') {
    deadline = 77;
  };
  let remaining = (deadline - age);
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