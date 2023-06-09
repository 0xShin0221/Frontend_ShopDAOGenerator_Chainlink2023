# Frontend_ShopDAOGenerator_Chainlink2023

`Currently in the building status 🚀`

[ShopDAO generator dApp](https://dev-shop-dao-generator-chainlink2023.vercel.app/)

[DEV POST](https://devpost.com/software/shopdao-generator)

## Deployed Contract

[Protocol repository](https://github.com/0xShin0221/Protocol_ShopDAOGenerator_Chainlink2023)

WIP
| Contract | Address | Description |
| -------- | ------- | ----------- |
| AnotherContract | `0xabcdef1234567890abcdef1234567890abcdef12` | A contract responsible for ABC operations. |

## About

### Title

`Turn your customers to more than a fan`

Launch a Shopify-based e-commerce platform using DAO principles

### Inspiration

The inspiration for the ShopDAO generator stemmed from observing a thriving trend – the integration of e-commerce with DAOs and autonomous workflows.

For instance, the ShopDAO generator enables a brand to establish a retail-specific DAO. When a product selling proposal is approved by the DAO governance, the product is automatically listed on Shopify, through the use of Chainlink Oracle hosted by Chainlink Functions. The sales profits are then autonomously and fairly distributed to NFT holders.

### What it does

The ShopDAO generator is a groundbreaking tool that allows brand to create a retail-specific DAO for their Shopify-based e-commerce platform. It empowers brand fans to actively participate in the decision-making process and involves them in daily business operations. It also allows both brand and fans to benefit from generated profits.

User usecase:

- [Brand Manager] Create a retail-specific DAO.
- [Brand Fan] Enable fans to actively participate in the decision-making process.
- [Brand Fan] Facilitate their involvement in the day-to-day brand business operations.
- [Brand Fan] Allow fans to benefit from the generated profits.
- [Brand Manager] stock up on merchandise by nft sales.

<img src="https://github.com/0xShin0221/Frontend_ShopDAOGenerator_Chainlink2023/blob/develop/public/gif/mobile-workflow.gif?raw=true" alt="shopdao generator workflow" width="60%">

# Dev

## Vercel Postgres setup

1. Create a database by following [1. Create a Postgres database](https://vercel.com/docs/storage/vercel-postgres/quickstart#quickstart)
2. Pull .env by `vercel env pull .env`.

In Vercel's official, `vercel env pull .env.local` should be executed, but in Prisma `.env` is used.

3. Create the tables by `npx prisma db push`

# The following is the output produced by Next.js

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
