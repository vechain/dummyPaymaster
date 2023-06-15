
const MyPaymaster = artifacts.require('MyPaymaster');
const MyToken = artifacts.require('MyToken');
const { expect } = require('chai');

const ENTRY_POINT = "0x156af466f5309022abc7E3472E8C1A4BF7bC1177";

contract('MyPaymaster', function (accounts) {
  beforeEach(async function () {

    this.MyPaymaster = await MyPaymaster.new(ENTRY_POINT);
  });

  it('default value is 0', async function () {
        console.log("MyPaymaster address: ", this.MyPaymaster.address)
        expect(true);
    });

});
