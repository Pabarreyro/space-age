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

  it('should calculate user age in seconds from birthday', function() {
    expect(testUser18.calculateAge()).toEqual(567720000);
    expect(testUser90.calculateAge()).toEqual(2838600000);
  });
});
