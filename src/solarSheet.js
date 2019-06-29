export class SolarCalc {
  constructor (year){
    this.year = year,
    this.earthAge = '',
    this.smokes = '',
    this.drinks = '',
    this.exercises = '',
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
      if (this.smokes === true) {
        this.earthAge - 10
      }
    }

    boozeCruiser() {
      if (this.drinks === true) {
        this.earthAge - 5
      }
    }

    heckaSwoll() {
      if (this.exercises === true) {
        this.earthAge + 10
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
};
