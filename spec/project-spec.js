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
    expect(testUser18.calculateAge()).toEqual(567648000);
    expect(testUser90.calculateAge()).toEqual(2838240000);
  });

  it('should generate user age in second on Mercury, Venus, Mars and Juipter', function() {
    expect(testUser18.ageMercury).toEqual(2365200000);
    expect(testUser90.ageMercury).toEqual(11826000000);
  });

  it('should generate user age in second on Mercury, Venus, Mars and Juipter', function() {
    expect(testUser18.expectancy).toEqual(2365200000);
    expect(testUser90.expectancy).toEqual(2365200000);
  });
});
