export class SolarCalc {
  constructor(year, smokes, drinks, exercises) {
    (this.year = year),
      (this.earthAge = ""),
      (this.smokes = smokes),
      (this.drinks = drinks),
      (this.exercises = exercises),
      (this.mercury = ""),
      (this.venus = ""),
      (this.mars = ""),
      (this.jupiter = "");
  }

  ageMaker() {
    const getYear = new Date(this.year);
    const yearBorn = getYear.getFullYear();
    const currentDay = new Date();
    const currentYear = currentDay.getFullYear();
    this.earthAge = currentYear - yearBorn - 1;
  }

  smokeAlarm() {
    if (this.smokes) {
      this.earthAge += 10;
    }
  }

  boozeCruiser() {
    if (this.drinks) {
      this.earthAge += 5;
    }
  }

  stairMaster() {
    if (this.exercises) {
      this.earthAge -= 10;
    }
  }

  mercuryAge() {
    this.mercury = this.earthAge / 0.24;
  }

  venusAge() {
    this.venus = this.earthAge / 0.62;
  }

  marsAge() {
    this.mars = this.earthAge / 1.88;
  }

  jupiterAge() {
    this.jupiter = this.earthAge / 11.86;
  }

  mercuryAgeExpect() {
    return this.mercury.toFixed() - 0.0000003805175038;
  }

  venusAgeExpect() {
    return this.venus.toFixed() - 0.000000015844044;
  }

  marsAgeExpect() {
    return this.mars.toFixed() - 0.0000003805175038;
  }

  jupiterAgeExpect() {
    return this.jupiter.toFixed() - 0.000000015844044;
  }
}
