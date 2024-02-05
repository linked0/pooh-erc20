import { ethers } from "hardhat";

async function main() {
    // get wallet from sepolia admin key
    const wallet = new ethers.Wallet(process.env.SEPOLIA_ADMIN_KEY, ethers.provider);

    // get balance PoohToken for SEPOLIA_ADMIN_KEY from sepolia network
    console.log("POOHTOKEN ADDRESS: ", process.env.POOHTOKEN_ADDRESS);
    const pooh = await ethers.getContractAt("PoohToken", process.env.POOHTOKEN_ADDRESS) as PoohToken;
    console.log(`PoohToken address: ${pooh.target}`);
    const balance = await pooh.balanceOf(wallet.address);
    // print balance with 7 decimal places
    console.log(`Balance: ${ethers.formatUnits(balance, 7)}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
