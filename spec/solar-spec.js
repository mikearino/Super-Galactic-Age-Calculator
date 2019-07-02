
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

  it('should correctly determine the users age for Jupiter', function () {
    const bobBarker = new SolarCalc('2010')
    bobBarker.ageMaker()
    bobBarker.jupiterAge()
    expect(bobBarker.jupiter).toEqual(0.7588532883642496);
  });

  it('should correctly increase the users age if user smokes by 10', function () {
    const malboroMan = new SolarCalc('1984', "true")
    malboroMan.ageMaker()
    malboroMan.smokeAlarm()
    expect(malboroMan.earthAge).toEqual(45);
  });

  it('should correctly increase the users age if user drinks by 5', function () {
    const drunkTron5000 = new SolarCalc('1984', "true", "true", "false")
    drunkTron5000.ageMaker()
    drunkTron5000.boozeCruiser()
    expect(drunkTron5000.earthAge).toEqual(40);
  });

  it('should correctly decrease the users age if user exercises by 10', function () {
    const healthNut = new SolarCalc('1984', "false", "false", "true")
    healthNut.ageMaker()
    healthNut.stairMaster()
    expect(healthNut.earthAge).toEqual(25);
  });

  it('should correctly decrease the users age if they lived on mercury', function () {
    const mercMan = new SolarCalc('1984')
    mercMan.ageMaker()
    mercMan.mercuryAge()
    expect(mercMan.mercuryAgeExpect()).toEqual(145.9999996194825);
  });

  it('should correctly decrease the users age if they lived on Venus', function () {
    const venusPerson = new SolarCalc('1984')
    venusPerson.ageMaker()
    venusPerson.venusAge()
    expect(venusPerson.venusAgeExpect()).toEqual(55.999999984155956);
  });

  it('should correctly decrease the users age if they lived on Mars', function () {
    const marsMan = new SolarCalc('1984')
    marsMan.ageMaker()
    marsMan.marsAge()
    expect(marsMan.marsAgeExpect()).toEqual(18.999999619482494);
  });

  it('should correctly decrease the users age if they lived on Venus', function () {
    const jupiterPerson = new SolarCalc('1984')
    jupiterPerson.ageMaker()
    jupiterPerson.venusAge()
    expect(jupiterPerson.venusAgeExpect()).toEqual(55.999999984155956);
  });
});
