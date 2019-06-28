import { SolarCalc } from './../src/solarSheet.js';

describe('SolarCalc', function () {

  it('should correctly determine whether user has a number input', function () {
    let radMan = new SolarCalc("cat");
    radMan.checkForNum()
    console.log(radMan.checkForNum)
    expect(radMan.checkForNum).toEqual(true);
  });

  // it('should correctly determine whether character levels up', function () {
  //     let skateboardDude = new SolarCalc(3,4)
  //     let level = skateboardDude.level
  //     skateboardDude.levelUp(55)
  //     expect(skateboardDude.level).toEqual(level + 1);
  //
  //
  //   });

});
