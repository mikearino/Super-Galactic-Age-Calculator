
import { SolarCalc } from './../src/solarSheet.js';

describe('SolarCalc', function () {

  it('should correctly determine the users age', function () {
    const steveBrule = new SolarCalc('1984');
    steveBrule.ageMaker()
    console.log(steveBrule)
    expect(steveBrule.earthAge).toEqual(35);
  });

  it('should correctly determine the users age for Mercury', function () {
      const ronaldMcdonald = new SolarCalc('1995')
      ronaldMcdonald.ageMaker()
      ronaldMcdonald.mercuryAge()
      console.log(ronaldMcdonald)
      expect(ronaldMcdonald.mercury).toEqual(100);

    });
  });
