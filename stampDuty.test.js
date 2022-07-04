const { rate } = require('./stampDuty');

describe('building stamp duty calculator', () => {
  it(`calculate of the percentage`, () => {
    expect(rate(300000, 0)).toEqual({ level: 300000, tax: 0 });
  });
  it('', () => {});
});
