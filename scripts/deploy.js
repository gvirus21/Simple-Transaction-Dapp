const hre = require("hardhat");

async function main() {
  const TransactionManager = await hre.ethers.getContractFactory(
    "TransactionManager"
  );
  const transactionManager = await TransactionManager.deploy("Welcome :)");

  await transactionManager.deployed();

  console.log("TransactionManager deployed to:", transactionManager.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
