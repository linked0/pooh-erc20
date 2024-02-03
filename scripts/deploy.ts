import { ethers } from "hardhat";

async function main() {
  const pooh = await ethers.deployContract("PoohnetToken");

  await pooh.waitForDeployment();

  console.log(`Poo deployed to ${pooh.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
