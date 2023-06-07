```mermaid
sequenceDiagram
	actor GeneralUser
  GeneralUser ->> (Shopify)BrandEC:Purchase Products

   (Shopify)BrandEC ->> dAppBackendAPI: Shopify API of webhook<br /> to get selling data.
	Note right of dAppBackendAPI: Using Shopify's API<br /> to calculate costs, etc.
　dAppBackendAPI ->> (SC)SalesDistributor: distributeProfits()
 actor EOA
 EOA ->> (SC)SalesDistributor: Claim() then transfer the profit
```
