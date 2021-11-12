import calculate from '../src/js/calculator.js';

describe ('calculate', () => {
  let age = 26;
  let ageInDays = age * 365;
  let mercuryAge = Math.floor(ageInDays / 88);


  test ('should show me my age in days instead of years', () => {
    expect(ageInDays).toEqual(9490);
  });

  test ('should calculate my age on Mercury', () => {
  expect(mercuryAge).toEqual(107);
  });
});
