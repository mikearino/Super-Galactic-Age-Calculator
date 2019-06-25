import { Triangle } from './../src/triangle.js';

describe('Triangle', function () {

  it('should test whether a Triangle has three sides', function () {
    var triangle = new Triangle(3, 4, 5);
    expect(triangle.side1).toEqual(3);
    expect(triangle.side2).toEqual(4);
    expect(triangle.side3).not.toEqual(6);
  });

});
