import { convertYearsToSeconds, SpaceAge } from "./../src/space_age.js";

describe('Space Age Calculator', function() {
  let testUser18;
  let testUser90;

  beforeEach(function() {
    testUser18 = new SpaceAge(2000, 4, 20);
    testUser90 = new SpaceAge(1928, 4, 20);
  });

  it('should convert 1 year to seconds', function() {
    expect(convertYearsToSeconds(1)).toEqual(3.1536e+7);
  });

  it('should calculate user age in year from birthday', function() {
    expect(testUser18.calculateAge()).toEqual(18);
    expect(testUser90.calculateAge()).toEqual(90);
  });

  it('should generate user age in years on Mercury, Venus, Mars and Juipter', function() {
    expect(testUser18.ageMercury).toEqual(74.7);
    expect(testUser90.ageMercury).toEqual(373.6);
  });
});
