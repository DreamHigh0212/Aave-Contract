const hre = require("hardhat");

async function main() {
  const deployment = await hre.ethers.deployContract("Pool", ["0xF251b8E8D3d7E8f73Ecc6Fc2D76eBef24Fb62B69"], {
    libraries: {
      BorrowLogic: "0xaE4972DE2A7c1D9E9bcb05C496652Ee76E3FcF77",
      BridgeLogic: "0xF34d79d59cfAe10e64a375e5db3C453EB170B211",
      EModeLogic: "0x82469c2A4B52Adc1f43d17089488dA5F6fce1dF3",
      LiquidationLogic: "0x47fE71fb1093f81B38f296047B250ae8992e5660",
      PoolLogic: "0x04F9403365f42d66bB261b896265178B3eDD2068",
      SupplyLogic: "0x67d1Be345EDE5e8229bd90763281E2A9Ba4A3e57"
    }
  });

  await deployment.waitForDeployment();

  console.log(
    `Contract has been deployed to ${deployment.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
