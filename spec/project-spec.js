import { convertYearsToSeconds, SpaceAge } from "./../src/space_age.js";

describe('Space Age Calculator', function() {
  let testUser18;
  let testUser90;

  beforeEach(function() {
    testUser18 = new SpaceAge(2000, 4, 20, 75);
    testUser90 = new SpaceAge(1928, 4, 20, 75);
  });

  it('should convert 1 year to seconds', function() {
    expect(convertYearsToSeconds(1)).toEqual(3.1536e+7);
  });

  it('should calculate user age in year from birthday', function() {
    expect(testUser18.ageEarth).toEqual(18);
    expect(testUser90.ageEarth).toEqual(90);
  });

  it('should generate user age in second on Mercury, Venus, Mars and Juipter', function() {
    expect(testUser18.ageMercury).toEqual(75);
    expect(testUser90.ageMercury).toEqual(375);
  });

  it('should take in life expectancy in years and convert to seconds', function() {
    expect(testUser18.expectancyEarth).toEqual(75);
    expect(testUser90.expectancyEarth).toEqual(75);
  });

  it('should generate life expectancy on other planets', function() {
    expect(testUser18.expectancyMercury).toEqual(312);
    expect(testUser90.expectancyMars).toEqual(39);
  });

  it('should calculate remaining life on Earth', function() {
    expect(testUser18.lifeRemaining).toEqual(57);
    expect(testUser90.lifeRemaining).toEqual(-15);
  });

  it('should generate remaining life on other planets', function() {
    expect(testUser18.lifeRemainingMercury).toEqual(237);
    expect(testUser90.lifeRemainingMars).toEqual(-8);
  });
});
