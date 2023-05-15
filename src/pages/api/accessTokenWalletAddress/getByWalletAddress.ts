// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { prisma } from "../../../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log('Request Body', req.body);
  console.log(`Request method: ${req.method}`);
  if (req.method !== "POST") {
    res.statusCode = 405;
    res.setHeader("Allow", "POST");
    res.end("Method Not Allowed");
    return;
  }

  const { walletAddress } = req.body;
  console.log(`walletAddress: ${walletAddress}`);

  try {
    const accessTokenWalletAddress =
      await prisma.accessTokenWalletAddress.findFirst({
        where: {
          walletAddress,
        },
      });

    console.log(
      `Find accessTokenWalletAddress: ${JSON.stringify(
        accessTokenWalletAddress,
        null,
        2
      )}`
    );
    res.status(200).json(accessTokenWalletAddress);
  } catch (error) {
    console.error(`Error fetching store data: ${error}`);
    res.status(500);
  }
}
