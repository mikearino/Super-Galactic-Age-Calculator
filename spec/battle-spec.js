
import { SolarCalc } from './../src/solarSheet.js';

describe('SolarCalc', function () {

  it('should correctly determine the users age', function () {
    const steveBrule = new SolarCalc('1984');
    steveBrule.ageMaker()
    expect(steveBrule.earthAge).toEqual(35);
  });

  it('should correctly determine the users age for Mercury', function () {
    const ronaldMcdonald = new SolarCalc('1995')
    ronaldMcdonald.ageMaker()
    ronaldMcdonald.mercuryAge()
    expect(ronaldMcdonald.mercury).toEqual(100);
  });

  it('should correctly determine the users age for Venus', function () {
    const bobSagat = new SolarCalc('1919')
    bobSagat.ageMaker()
    bobSagat.venusAge()
    expect(bobSagat.venus).toEqual(161.29032258064515);
  });

  it('should correctly determine the users age for Mars', function () {
    const mattDamon = new SolarCalc('1992')
    mattDamon.ageMaker()
    mattDamon.marsAge()
    expect(mattDamon.mars).toEqual(14.361702127659575);
  });

  it('should correctly determine the users age for Mars', function () {
    const bobBarker = new SolarCalc('2010')
    bobBarker.ageMaker()
    bobBarker.jupiterAge()
    expect(bobBarker.jupiter).toEqual(0.7588532883642496);
  });
});
