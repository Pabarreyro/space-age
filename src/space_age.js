class SpaceAge {
  constructor(birthYear, birthMonth, birthDay) {
    this.birthday = new Date(birthYear, birthMonth-1, birthDay);
    this.now = new Date();
    this.ageEarth = this.calculateAge();
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
