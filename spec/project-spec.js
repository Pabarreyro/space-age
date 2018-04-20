// import { convertToSeconds } from "./../src/space_age.js";

describe('Space Age Calculator', function() {
  it('should convert one year to seconds', function() {
    expect(convertYearsToSeconds(1)).toEqual(3.1536e+7);
  });
});
