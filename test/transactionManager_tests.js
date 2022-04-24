const { expect } = require("chai");
const { ethers, waffle } = require("hardhat");
const provider = waffle.provider;

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

  it("Deposit function should deposit correct amount of ETH", async () => {
    const depositAmount = ethers.utils.parseEther("1");

    const depositTx = await transactionManager.deposit({
      value: depositAmount,
    });

    expect(await provider.getBalance(transactionManager.address)).to.equal(depositAmount);
  });
});
