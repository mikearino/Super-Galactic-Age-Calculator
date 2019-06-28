import { SolarCalc } from './../src/solarSheet.js';

describe('SolarCalc', function () {

  it('should correctly determine the users input date', function () {
    let radMan = new SolarCalc('1932');
    radMan.dayMaker()
    console.log(radMan)
    expect(radMan.dayMaker).toEqual(Thu Dec 31 1931 16:00:00 GMT-0800 (Pacific Standard Time));
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
