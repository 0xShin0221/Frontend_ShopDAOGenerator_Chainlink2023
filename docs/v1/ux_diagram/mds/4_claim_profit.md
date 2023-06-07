```mermaid
sequenceDiagram
	actor GeneralUser
  GeneralUser ->> (Shopify)BrandEC:Purchase Products
  (ShopifyAPI) ->> dAppBackendAPI: webhook - orders/create
	Note right of dAppBackendAPI: Using Shopify's API to calculate costs, etc.
　dAppBackendAPI ->> (SC)SalesDistributor: distributeProfits()
 actor EOA
 actor EOA2
　EOA ->> dApp:Claim Profit
 (SC)SalesDistributor ->> EOA: Transfer the profit
 EOA2 ->> dApp:Claim Profit
(SC)SalesDistributor ->> EOA2: Transfet the profit

```
