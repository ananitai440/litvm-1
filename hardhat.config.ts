import "dotenv/config";
import { defineConfig, configVariable } from "hardhat/config";
import hardhatIgnitionViemPlugin from "@nomicfoundation/hardhat-ignition-viem";
import hardhatEthers from "@nomicfoundation/hardhat-ethers";
import hardhatMocha from "@nomicfoundation/hardhat-mocha";
import hardhatKeystore from "@nomicfoundation/hardhat-keystore";

export default defineConfig({
  plugins: [hardhatIgnitionViemPlugin, hardhatEthers, hardhatMocha, hardhatKeystore],

  solidity: {
    version: "0.8.28",
  },
  networks: {
    hardhat: { type: "edr-simulated", chainId: 31337 },

    litvm: {
      type: "http",
      url: configVariable("LITEFORGE_RPC_URL"),
      accounts: [configVariable("DEPLOYER_PRIVATE_KEY")],
      chainId:4441
    },
  },
});
