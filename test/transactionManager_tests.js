const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Transaction Manager", function () {
  let transactionManager;
  let adrs1;
  let adrs2;

  before(async () => {
    let TransactionManager = await ethers.getContractFactory(
      "TransactionManager"
    );
    transactionManager = await TransactionManager.deploy("Welcome :)");

    await transactionManager.deployed();
    console.log(
      "TransactionManager.sol is deployed to: ",
      transactionManager.address
    );
  });

  beforeEach(async () => {
    [adrs1, adrs2] = await ethers.getSigners();
  });

  it("Owner address should be equal to adrs1", async () => {
    expect(await transactionManager.owner()).to.equal(adrs1.address);
  });
});
