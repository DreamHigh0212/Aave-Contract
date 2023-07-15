require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify");
require("dotenv").config();

const { API_KEY, RPC_URL, TESTNET_GOERLI_RPC_URL, TESTNET_BSC_RPC_URL, WALLET_PRIVATE_KEY } = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.10",
        settings: {
          optimizer: { enabled: true, runs: 100_000 },
          evmVersion: "berlin"
        }
      },
    ]
  },
  external: {
    contracts: [
      {
        artifacts: 'node_modules/@aave/deploy-v3/artifacts',
        deploy: 'node_modules/@aave/deploy-v3/dist/deploy',
      },
    ],
  },
  defaultNetwork: 'bsc',
  networks: {
    bsc: {
      url: TESTNET_BSC_RPC_URL,
      chainId: 97,
      gasPrice: 20000000000,
      accounts: [WALLET_PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: {
      bscTestnet: API_KEY
    },
    // customChains: [
    //   {
    //     network: "bsc",
    //     chainId: 97,
    //     urls: {
    //       apiURL: "https://api-goerli.lineascan.build/api",
    //       browserURL: ""
    //     }
    //   }
    // ]
  }
};
