import { Character } from './../src/battleMaster.js';

describe('Character', function () {

  it('should test whether a character has a new Id', function () {
    var radMan = new Character(3, 4);
    radMan.assignId()
    expect(Radman.currentId).toEqual(1);
  });

  it('should correctly determine whether three lengths can be made into a triangle', function () {
      var notTriangle = new Triangle(3, 2, 3);
      console.log(notTriangle.checkType());
      expect(notTriangle.checkType()).toEqual('not a triangle');


    });

});
