// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(`Chainlink: Sales distribution`);
  console.log(`method: ${req.method}`);
  if (req.method !== "GET") {
    res.statusCode = 405;
    res.setHeader("Allow", "GET");
    res.end("Method Not Allowed");
    return;
  }

  console.log("Chainlink req:", req.body);

  const sampleResponse = {
    data: {
      nftAddresses: ["0x"],
      hyphenatedOrderIds: [
        "820982911946154500-820982911946154501-820982911946154502",
      ],
      totalSales: ["22"],
      totalProfits: ["11"],
    },
  };

  res.status(200).json(sampleResponse);
}
