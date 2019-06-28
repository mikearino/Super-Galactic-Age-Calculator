export class SolarCalc {
  constructor (age){
    this.age = age,
    this.daysAlive = []
  }

  getDaysAlive (age) {
    let conversion = new Date(this.age)
    console.log(conversion)
    this.daysAlive.push(conversion)
    }
};
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
