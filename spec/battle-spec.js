import { Character } from './../src/battleMaster.js';

describe('Character', function () {

  it('should correctly determine whether a character has a new Id', function () {
    let radMan = new Character(3, 4);
    radMan.assignId()
    console.log(radMan.currentId)
    expect(radMan.currentId).toEqual(1);
  });

  it('should correctly determine whether character levels up', function () {
      let skateboardDude = new Character(3,4)
      let level = skateboardDude.level
      skateboardDude.levelUp(55)
      expect(skateboardDude.level).toEqual(level + 1);


    });

});
