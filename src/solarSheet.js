export class SolarCalc {
  constructor (year){
    this.year = year,
    this.earthAge = '',
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
