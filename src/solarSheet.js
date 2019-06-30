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
     if(this.mercury >= 100) {
       // console.log("You made it past the life expectancy you have" + this.mercury - 100)
     }
  }

  venusAge () {
    this.venus = this.earthAge / .62
    if(this.venus >= 100) {
      console.log("You made it past 100 you have" + this.venus - 100 +
      " years to live!")
    }
  }

  marsAge () {
    this.mars = this.earthAge / 1.88
  }

  jupiterAge () {
    this.jupiter = this.earthAge / 11.86
  }
};
