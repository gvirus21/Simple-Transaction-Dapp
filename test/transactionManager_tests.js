const { expect } = require("chai");
const { ethers, waffle } = require("hardhat");
const provider = waffle.provider;

describe("Transaction Manager", function () {
  let transactionManager;
  let adrs1;
  let adrs2;
  let depositAmount;

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
    depositAmount = ethers.utils.parseEther("10");

    await transactionManager.connect(adrs2).deposit({
      value: depositAmount,
    });

    expect(await provider.getBalance(transactionManager.address)).to.equal(depositAmount);
  });

  it("Should withdraw all amount to Owner if withdraw funciton is called by Owner", async () => {
    await transactionManager.connect(adrs1).withdraw();
    expect(await provider.getBalance(transactionManager.address)).to.equal(0)
  })

  it("Should fail withdraw if not called by owner", async () => {
    await expect(transactionManager.connect(adrs2).withdraw()).to.revertedWith(
      "Only Owner can perform this action."
    );
  })
});
