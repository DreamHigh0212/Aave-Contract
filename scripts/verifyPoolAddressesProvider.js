// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  await hre.run("verify:verify", {
    address: "0xF251b8E8D3d7E8f73Ecc6Fc2D76eBef24Fb62B69",
    constructorArguments: [
      "DREAM_POOL",
      "0x32912fcf6b385653d7dbf235a66FFD917f47Eb68"
    ],
  });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
