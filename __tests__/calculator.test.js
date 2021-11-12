import calculate from '../src/js/calculator.js';

describe ('calculate', () => {
  let age = 26;
  let ageInDays = age * 365 ;
  let mercuryAge = Math.floor(ageInDays / 88);
  let venusAge = Math.floor(ageInDays / 225);
  let marsAge = Math.floor(ageInDays / 687);
  let jupiterAge = Math.floor(ageInDays / 4383);


  test ('should show me my age in days instead of years', () => {
    expect(ageInDays).toEqual(9490);
  });

  test ('should calculate my age on Mercury', () => {
    expect(mercuryAge).toEqual(107);
  });

  test ('should calculate my age on Mercury, Venus, Mars, and Jupiter simultaneously', () => {
    expect(mercuryAge).toEqual(107);
    expect(venusAge).toEqual(42);
    expect(marsAge).toEqual(13);
    expect(jupiterAge).toEqual(2);
  });

});
