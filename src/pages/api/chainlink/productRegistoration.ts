// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Product } from "@shopify/shopify-api/rest/admin/2023-04/product";
import type { NextApiRequest, NextApiResponse } from "next";

import { prisma } from "../../../../lib/prisma";
import { access } from "fs";
import { ProductRegistrationReqBody } from "@/types/ShopifyAPITypes";

export default async function handler(
  req: NextApiRequest & { body: ProductRegistrationReqBody },
  res: NextApiResponse
) {
  console.log(`Chainlink: Product Registration API`);
  console.log(`method: ${req.method}`);
  console.log("body: ", req.body);
  if (req.method !== "POST") {
    res.statusCode = 405;
    res.setHeader("Allow", "POST");
    res.end("Method Not Allowed");
    return;
  }

  // TODO: add productRegistrationReqBody validation
  const productRegistrationReqBody = req.body as ProductRegistrationReqBody
  if (!productRegistrationReqBody.walletAddress) {
    res.statusCode = 400
    res.end('Wallet Address Not Found')
    return; 
  }

  try {
    const accessTokenWalletAddress =
      await prisma.accessTokenWalletAddress.findFirst({
        where: {
          walletAddress: productRegistrationReqBody.walletAddress,
        },
      });
      if (!accessTokenWalletAddress) {
        console.log("AccessTokenWalletAddress Not Found")
        res.statusCode = 404
        res.end('AccessTokenWalletAddress Not Found')
        return
      }

    console.log("Successfully fetch AccessTokenWalletAddress")
    if (!accessTokenWalletAddress?.accessToken) {
      console.log("Successfully fetch AccessTokenWalletAddress, but access token not found")
      res.statusCode = 404
      res.end('Successfully fetch AccessTokenWalletAddress, but access token not found')
      return
    }

    const headers = {
      // Ex shpat_1234567890abcdef1234567890abcdef
      "X-Shopify-Access-Token": accessTokenWalletAddress.accessToken,
      "Content-Type": "application/json",
    };

    console.log(`storeUrl: ${productRegistrationReqBody.storeUrl}`);
    // Ex https://your-development-store.myshopify.com/admin/api/2023-04/shop.json
    const productCreateUrl = `https://${productRegistrationReqBody.storeUrl}.myshopify.com/admin/api/2023-04/products.json`;
    console.log(`Product create url: ${productCreateUrl}`);
    console.log('productJsonString:', productRegistrationReqBody.productJsonString);
    console.log('productVariantsJsonString:', productRegistrationReqBody.productVariantsJsonString);
    const postProductsBody = JSON.stringify({
      product: {
        ...productRegistrationReqBody.productJsonString,
        variants: productRegistrationReqBody.productVariantsJsonString,
        options: productRegistrationReqBody.productOptionsJsonString,
        images: productRegistrationReqBody.productImagesJsonString,
      },
    });

    // https://shopify.dev/docs/api/admin-rest/2023-04/resources/product#post-products
    const response = await fetch(productCreateUrl, {
      method: "POST",
      headers,
      body: postProductsBody,
    });
    if (!response.ok) {
      console.log("Response not ok");
      console.log(`Error creating product data: ${response.status}`);
      console.log(`Error text: ${response.statusText}`);
      res.status(response.status);
      res.end(`Product: ${response.statusText}`);
      return;
    }

    const productData = await response.json();
    console.log("Product create response ok");
    console.log(`productData: ${JSON.stringify(productData)}`);
    const firstProductVariant = productData.product.variants[0];
    const inventoryItemId = firstProductVariant.inventory_item_id;
    console.log(`inventoryItemId: ${inventoryItemId}`);

    // TODO: fix to handle multiple inventories for  productInitialInventories by commit: https://github.com/0xShin0221/Protocol_ShopDAOGenerator_Chainlink2023/commit/b9662aa4c98a4bcb04a8237ba5c2a30f04c4d04f

    // Put Inventory Item
    // https://shopify.dev/docs/api/admin-rest/2023-04/resources/inventoryitem#put-inventory-items-inventory-item-id
    const inventoryItemPutUrl = `https://${req.body.storeUrl}.myshopify.com/admin/api/2023-04/inventory_items/${inventoryItemId}.json`;
    console.log(`inventory item put url: ${inventoryItemPutUrl}`);
    const inventoryItemPutBody = JSON.stringify({
      inventory_item: {
        id: inventoryItemId,
        sku: "Blue",
        cost: req.body.cost,
      },
    });
    const inventoryItemPutResponse = await fetch(inventoryItemPutUrl, {
      method: "PUT",
      headers,
      body: inventoryItemPutBody,
    });
    if (!response.ok) {
      console.log("Inventory item put Response not ok");
      console.log(
        `Error Putting inventory item data: ${inventoryItemPutResponse.status}`
      );
      console.log(`Error text: ${inventoryItemPutResponse.statusText}`);
      res.status(inventoryItemPutResponse.status);
      res.end(`Inventory Item Status: ${inventoryItemPutResponse.statusText}`);
      return;
    }

    const inventoryItemData = await inventoryItemPutResponse.json();
    console.log("Inventory item response ok");
    console.log(`Inventory item: ${JSON.stringify(inventoryItemData)}`);

    const chainId =
      process.env.NODE_ENV === "production"
        ? "137" // Matic
        : "11155111"; // Sepolia
    const salesDistributionData = await prisma.salesDistribution.create({
      data: {
        shopifyVariantId: firstProductVariant.id.toString(),
        productProfitRightNFTAddress: req.body.productProfitRightNFTAddress,
        chainId,
      },
    });
    console.log(
      `Created salesDistributionData: ${JSON.stringify(
        salesDistributionData,
        null,
        2
      )}`
    );

    res.status(200).json({
      productData,
      inventoryItemData,
      salesDistributionData,
    });
  } catch (error) {
    console.log("---------- catch ---------");
    console.error(`Error creating product data: ${error}`);
    res.status(500);
    res.end(`Error creating product data: ${error}`);
  }
}
