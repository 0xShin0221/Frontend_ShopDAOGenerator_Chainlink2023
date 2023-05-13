// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { prisma } from "../../../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("Request query", req.query);
  console.log(`Request method: ${req.method}`);
  if (req.method !== "DELETE") {
    res.statusCode = 405;
    res.end("Method Not Allowed");
    return;
  }

  const { id } = req.query;
  if (typeof id !== "string") {
    res.statusCode = 400;
    res.end("Bad Request");
    return;
  }

  console.log(`id: ${id}`);

  try {
    const data = await prisma.accessTokenWalletAddress.delete({
      where: {
        id,
      },
    });

    console.log(
      `Deleted accessTokenWalletAddress successfully: ${JSON.stringify(
        data,
        null,
        2
      )}`
    );
    res.status(200).json(data);
  } catch (error) {
    console.error(`Error fetching store data: ${error}`);
    res.status(500);
  }
}
