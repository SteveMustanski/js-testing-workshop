const expect = require('chai').expect;

// test suite
// sanity check, is mocha and chai set up
describe('Mocha', () => {
  // Test spec (unit test)
  it('should run our tests using npm', () => {
    expect(true).to.be.ok;
  });
});