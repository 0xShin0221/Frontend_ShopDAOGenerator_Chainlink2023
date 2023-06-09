// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Product } from "@shopify/shopify-api/rest/admin/2023-04/product";
import type { NextApiRequest, NextApiResponse } from "next";

import { prisma } from "../../../../lib/prisma";

export default async function handler(
  req: NextApiRequest & {
    body: {
      accessToken: string;
      storeUrl: string;
      productProfitRightNFTAddress: string;
      product: Product;
      price: number;
      cost: number;
    };
  },
  res: NextApiResponse
) {
  const headers = {
    // Ex shpat_1234567890abcdef1234567890abcdef
    "X-Shopify-Access-Token": req.body.accessToken,
    "Content-Type": "application/json",
  };
  try {
    console.log(`Chainlink: Product Registration API`);
    console.log(`method: ${req.method}`);
    console.log("body: ", req.body);
    if (req.method !== "POST") {
      res.statusCode = 405;
      res.setHeader("Allow", "POST");
      res.end("Method Not Allowed");
      return;
    }

    console.log(`accessToken: ${req.body.accessToken}`);
    console.log(`storeUrl: ${req.body.storeUrl}`);
    // Ex https://your-development-store.myshopify.com/admin/api/2023-04/shop.json
    const productCreateUrl = `https://${req.body.storeUrl}.myshopify.com/admin/api/2023-04/products.json`;
    console.log(`Producr create url: ${productCreateUrl}`);
    const body = JSON.stringify({
      product: {
        title: req.body.product.title,
        body_html: "<strong>Good snowboard!</strong>",
        vendor: "Burton",
        product_type: "Snowboard",
        variants: [
          {
            option1: "Blue",
            price: req.body.price,
            sku: "blue",
          },
        ],
      },
    });

    // https://shopify.dev/docs/api/admin-rest/2023-04/resources/product#post-products
    const response = await fetch(productCreateUrl, {
      method: "POST",
      headers,
      body,
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
