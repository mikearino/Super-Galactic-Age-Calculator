export class SolarCalc {
  constructor (year, smokes, drinks, exercises){
    this.year = year,
    this.earthAge = '',
    this.smokes = smokes,
    this.drinks = drinks,
    this.exercises = exercises,
    this.mercury = '',
    this.venus = '',
    this.mars = '',
    this.jupiter = ''
  }
  
  ageMaker () {
    const getYear = new Date(this.year)
    const yearBorn = getYear.getFullYear()
    const currentDay = new Date
    const currentYear = currentDay.getFullYear()
    this.earthAge = currentYear - yearBorn - 1
  }

  smokeAlarm() {
    if (this.smokes === "true") {
      this.earthAge += 10
      return this.earthAge
    }
  }

  boozeCruiser() {
    if (this.drinks === "true") {
      this.earthAge += 5
    }
  }

  stairMaster() {
    if (this.exercises === "true") {
      this.earthAge -= 10
    }
  }

  mercuryAge () {
    this.mercury = this.earthAge / .24
  }

  venusAge () {
    this.venus = this.earthAge / .62
  }

  marsAge () {
    this.mars = this.earthAge / 1.88
  }

  jupiterAge () {
    this.jupiter = this.earthAge / 11.86
  }

  mercuryAgeExpect () {
    return this.mercury.toFixed() - .0000003805175038
  }

  venusAgeExpect () {
    return this.venus.toFixed() - .000000015844044
  }

  marsAgeExpect () {
    return this.mars.toFixed() - .0000003805175038
  }

  jupiterAgeExpect () {
    return this.jupiter.toFixed() - .000000015844044
  }
};
