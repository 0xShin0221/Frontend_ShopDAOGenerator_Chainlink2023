// distributeProfits.ts
import { ethers } from "ethers";
import { abi } from "../../abi/SalesDistributor.json";

export async function salesDistributorContractClient(
  nftAddress: string,
  orderId: string,
  totalSale: number,
  totalProfit: number
): Promise<string> {
  // Ethereum network provider (this could be an Infura node for instance)
  const alchemyUrl = process.env.ALCHEMY_URL;
  if (!alchemyUrl) {
    throw new Error("Missing ALCHEMY_URL environment variable.");
  }
  const provider = new ethers.providers.JsonRpcProvider(alchemyUrl);

  // Wallet private key should be stored as an environment variable
  const privateKey = process.env.PRIVATE_KEY;
  if (!privateKey) {
    throw new Error("Missing PRIVATE_KEY environment variable.");
  }
  const wallet = new ethers.Wallet(privateKey, provider);

  // Contract address should be stored as an environment variable
  const contractAddress = process.env.SALES_DISTRIBUTION_CONTRACT_ADDRESS;
  if (!contractAddress) {
    throw new Error(
      "Missing SALES_DISTRIBUTION_CONTRACT_ADDRESS environment variable."
    );
  }

  const contract = new ethers.Contract(contractAddress, abi, wallet);

  // This will trigger the distributeProfits function
  const tx = await contract.distributeProfits({
    nftAddress,
    orderId,
    totalSale,
    totalProfit,
  });

  // Wait for transaction to be mined
  await tx.wait();

  return tx.hash;
}
