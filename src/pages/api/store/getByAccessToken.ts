// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const headers = {
    // Ex shpat_1234567890abcdef1234567890abcdef
    'X-Shopify-Access-Token': req.body.accessToken,
  }
  try {
    console.log(`method: ${req.method}`)
    console.log(`accessToken: ${req.body.accessToken}`)
    console.log(`storeUrl: ${req.body.storeUrl}`)
    // Ex https://your-development-store.myshopify.com/admin/api/2023-04/shop.json
    const shopFetchUrl = `https://${req.body.storeUrl}.myshopify.com/admin/api/2023-04/shop.json`
    console.log(`Shop fetch url: ${shopFetchUrl}`)
    const response = await fetch(shopFetchUrl, { method: 'GET', headers });
    if (response.ok) {
      const shopData = await response.json();
      res.status(200).json(shopData)
    } else {
      console.log('---------- else ---------')
      console.log(`Error fetching store data: ${response.status}`);
      console.log(`Error text: ${response.statusText}`);
      res.status(response.status)
      res.end(`Shopify Store: ${response.statusText}`)
    }
  } catch (error) {
    console.log('---------- catch ---------')
    console.error(`Error fetching store data: ${error}`);
    res.status(500)
  }
}
