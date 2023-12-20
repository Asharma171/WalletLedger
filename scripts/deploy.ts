import { ethers } from "hardhat";

async function main() {
  const CdnWalletLedger = await ethers.getContractFactory("CdnWalletLedger");
  const cdnWalletLedger = await CdnWalletLedger.deploy();

  await cdnWalletLedger.deployed();

  console.log(` CDN wallet ledger deployed to ${cdnWalletLedger.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
