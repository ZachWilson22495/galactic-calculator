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

describe ('expectency', () => {
  let age = 26
  let sex = 'male';
  let continent = 'northAmerica';
  let deadline = 0;
  if (sex === 'male' && continent === 'northAmerica') {
    deadline = 77
  };
  let remaining = deadline -= age;

  test ('should list deadline as 77', () => {
    expect(deadline).toEqual(77);
  });

  test ('should list remaining as 51', () => {
    expect(remaining).toEqual(53);
  });
});
