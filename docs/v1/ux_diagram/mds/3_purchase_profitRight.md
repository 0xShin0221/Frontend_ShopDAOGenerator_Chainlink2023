```mermaid
sequenceDiagram
	actor BrandManager
  BrandManager ->> dApp: Input form with Proposal Detail and new ProfitRightNFT info
  dApp ->> (SC)Governor: productPropose()
	(SC)Timelock ->> (SC)ProfitRightNFT: Mint new NFT for profit when product proposal is successful.

	actor BrandDAOMember
  actor GeneralUser
  BrandDAOMember ->> dApp: Purchase ProfitRightNFT
  dApp ->> (SC)ProfitRightNFT: Claim()
  GeneralUser ->> dApp: Purchase ProfitRightNFT
	dApp ->> (SC)ProfitRightNFT: Claim()
```
