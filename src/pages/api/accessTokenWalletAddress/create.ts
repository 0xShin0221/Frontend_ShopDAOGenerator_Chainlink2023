// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { prisma } from '../../../../lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log('Request body', req.body)
  console.log(`Request method: ${req.method}`)
  if (req.method !== "POST") {
    res.statusCode = 405;
    res.setHeader("Allow", "POST");
    res.end("Method Not Allowed");
    return;
  }

  const { accessToken, walletAddress, storeUrl } = req.body
  console.log(`accessToken: ${accessToken}`)
  console.log(`walletAddress: ${walletAddress}`)
  console.log(`storeUrl: ${storeUrl}`)


  try {
    const data = await prisma.accessTokenWalletAddress.create({
      data: {
        accessToken,
        walletAddress,
        storeUrl,
      },
    })

    console.log(`Created accessTokenWalletAddress successfully: ${JSON.stringify(data, null, 2)}`)
    res.status(200).json(data)
  } catch (error) {
    console.error(`Error fetching store data: ${error}`);
    res.status(500)
  }
}
