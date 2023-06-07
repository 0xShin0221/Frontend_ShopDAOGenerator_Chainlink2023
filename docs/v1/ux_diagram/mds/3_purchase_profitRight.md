```mermaid
sequenceDiagram
	actor BrandManager
  BrandManager ->> dApp: Input form with Proposal Detail and <br/> new ProfitRightNFT info
  dApp ->> (SC)DAO: productPropose()
	(SC)DAO ->> (SC)ProfitRightNFT: Mint new NFT for profit<br/> when product proposal is successful.
  BrandManager ->> (SC)ProfitRightNFT: Set ClaimCondition
	actor User
  User ->> dApp: Purchase ProfitRightNFT
  dApp ->> (SC)ProfitRightNFT: Claim()
```
