```mermaid
sequenceDiagram
		actor BrandManager
		BrandManager ->> dApp: Input form w/ ShopifyAPI key
    dApp ->> ShopifyAPI: Any?
    Note over ShopifyAPI,Brand EC on Shopify:Integration w/ Shopify EC
    ShopifyAPI ->> dApp: Info of the EC
```
