// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { salesDistributorContractClient } from "@/utils/salesDistributorContractClient";
import type { NextApiRequest, NextApiResponse } from "next";

const mockData = {
  nftAddress: "0x1234567890123456789012345678901234567890",
  orderId: "testOrderId",
  totalSale: 500,
  totalProfit: 100,
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(`Webhook: Order payment`);
  console.log(`method: ${req.method}`);
  if (req.method !== "POST") {
    res.statusCode = 405;
    res.setHeader("Allow", "POST");
    res.end("Method Not Allowed");
    return;
  }

  if (
    !mockData.nftAddress ||
    !mockData.orderId ||
    !mockData.totalSale ||
    !mockData.totalProfit
  ) {
    res.status(400).json({ error: "Missing necessary order data" });
    return;
  }

  try {
    const txHash = await salesDistributorContractClient(
      mockData.nftAddress,
      mockData.orderId,
      mockData.totalSale,
      mockData.totalProfit
    );

    // Send a response with the transaction hash
    res.status(200).json({ txHash });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong." });
  }
}
