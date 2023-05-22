// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { ProductRegistrationReqBody } from "./ShopifyAPITypes";

export default async function handler(
  req: NextApiRequest & { body: ProductRegistrationReqBody },
  res: NextApiResponse
) {
  console.log(`Chainlink: Product Registration API`);
  console.log(`method: ${req.method}`);
  if (req.method !== "POST") {
    res.statusCode = 405;
    res.setHeader("Allow", "POST");
    res.end("Method Not Allowed");
    return;
  }

  const {
    productProfitRightNFTAddress,
    productJsonString,
    productVariantsJsonString,
    productOptionsJsonString,
    productImagesJsonString,
    productInitialInventories,
  } = req.body;

  // Log the received data for debug purposes
  console.log(
    "Product Profit Right NFT Address: ",
    productProfitRightNFTAddress
  );
  console.log("Product JSON: ", productJsonString);
  console.log("Product Variants: ", productVariantsJsonString);
  console.log("Product Options: ", productOptionsJsonString);
  console.log("Product Images: ", productImagesJsonString);
  console.log("Product Initial Inventories: ", productInitialInventories);

  const sampleResponse = {
    message: "Product Registration Received",
  };

  res.status(200).json(sampleResponse);
}
