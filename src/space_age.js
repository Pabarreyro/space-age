class SpaceAge {
  constructor(birthYear, birthMonth, birthDay, lifeExpectancy) {
    this.now = new Date();
    this.birthday = new Date(birthYear, birthMonth-1, birthDay);
    this.expectancyEarth = convertYearsToSeconds(lifeExpectancy);
    this.ageEarth = this.calculateAge();
    this.lifeRemaining = this.expectancyEarth - this.ageEarth;
    this.ageMercury = this.ageEarth / 0.24;
    this.expectancyMercury = Math.floor(this.expectancyEarth / 0.24);
    this.ageVenus = this.ageEarth / 0.62;
    this.expectancyVenus = Math.floor(this.expectancyEarth / 0.62);
    this.ageMars = this.ageEarth / 1.88;
    this.expectancyMars = Math.floor(this.expectancyEarth / 1.88);
    this.Jupiter = this.ageEarth / 11.86;
    this.expectancyJupiter = Math.floor(this.expectancyEarth / 11.86);
  }

  calculateAge() {
    let age = 0;
    if (this.birthday.getUTCMonth() > this.now.getUTCMonth()) {
      age += (this.now.getUTCFullYear() - this.birthday.getUTCFullYear()) - 1;
    } else {
      age += this.now.getUTCFullYear() - this.birthday.getUTCFullYear();
    }

    return convertYearsToSeconds(age);
  }
}

function convertYearsToSeconds(years) {
  return years * 3.1536e+7;
}

export {
  SpaceAge,
  convertYearsToSeconds }
