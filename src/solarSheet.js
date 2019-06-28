export class SolarCalc {
  constructor (year){
    this.year = year,
    this.daysAlive = ''
  }

  dayMaker () {
    const getYear = new Date(this.year)
    this.daysAlive = getYear.getFullYear()
    }
};

let mike = new SolarCalc ('1984')
//   assignId () {
//     this.currentId += 1;
//     return this.currentId;
//   }
//   levelUp (exp) {
//     this.exp += exp
//     if (this.exp >= 50) {
//       this.level++
//     }
//   };



  // battle (enemy) {
  //   char2.hp -= this.attack
  //   if (char2.hp <= 0) {
  //     char2.life = false;
  //   }
  //   newAttack (foundAttack){
  //     char1
  //   }
  // }
