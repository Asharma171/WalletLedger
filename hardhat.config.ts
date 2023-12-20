import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config();

const privateKeyOwner = process.env.ACCOUNT_OWNER_PVT_KEY;
const polygonscanAPIkey = process.env.ETHERSCAN_API_KEY;

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/t1VlRcoaFGwdENf7Csg1-7xwk0dJjCsP",
      accounts: [`0x${privateKeyOwner}`]
    },
  },
  etherscan: {
    apiKey: polygonscanAPIkey
  },

};

export default config;
