export class SolarCalc {
  constructor (hp, attack){
    this.hp = hp,
    this.attack = attack,
    this.level = 1
    this.life = true;
    this.currentId = 0;
    this.exp = 0;
  }
  assignId () {
    this.currentId += 1;
    return this.currentId;
  }
  levelUp (exp) {
    this.exp += exp
    if (this.exp >= 50) {
      this.level++
    }
  };



  // battle (enemy) {
  //   char2.hp -= this.attack
  //   if (char2.hp <= 0) {
  //     char2.life = false;
  //   }
  //   newAttack (foundAttack){
  //     char1
  //   }
  // }
};
