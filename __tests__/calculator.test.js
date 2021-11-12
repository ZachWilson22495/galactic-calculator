import calculate from '../src/js/calculator.js';

describe ('calculate', () => {
  let age = 26;
  let ageInDays = age * 365
  test ('should show me my age in days instead of years', () => {
    expect(ageInDays).toEqual(9490);
  });
});
