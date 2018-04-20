class SpaceAge {
  constructor(birthYear, birthMonth, birthDay) {
    this.birthday = new Date(birthYear, birthMonth-1, birthDay);
    this.now = new Date();
    this.ageEarth = this.calculateAge();
    this.ageMercury = this.ageEarth / 0.24;
    this.ageVenus = this.ageEarth / 0.62;
    this.ageMars = this.ageEarth / 1.88;
    this.Jupiter = this.ageEarth / 11.86;
  }

  calculateAge() {
    let age = 0;
    if (this.birthday.getUTCMonth() > this.now.getUTCMonth()) {
      age += (this.now.getUTCFullYear() - this.birthday.getUTCFullYear()) - 1;
    } else {
      age += this.now.getUTCFullYear() - this.birthday.getUTCFullYear();
    }
    return age;
    // return convertYearsToSeconds(age);
  }

}

function convertYearsToSeconds(years) {
  return years * 3.1536e+7;
}

export {
  SpaceAge,
  convertYearsToSeconds }
