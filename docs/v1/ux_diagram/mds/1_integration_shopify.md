```mermaid
sequenceDiagram
		actor BrandManager
		BrandManager ->> dApp: Input form w/ ShopifyAPI key
    dApp ->> ShopifyAPI: Post to create new webhook for get sells
    Note over ShopifyAPI,Brand EC on Shopify:Integration w/ Shopify EC
    ShopifyAPI ->> dApp: Info of the EC
```
