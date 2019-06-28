export class SolarCalc {
  constructor (age){
    this.age = age,
    this.daysAlive = []
  }

  dayMaker (age) {
    const getDays = this.age * 365
    this.daysAlive.push(getDays).toString()
    }
};

let mike = new SolarCalc (35)
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
