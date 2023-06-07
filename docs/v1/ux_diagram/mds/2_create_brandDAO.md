```mermaid
sequenceDiagram
	actor BrandManager
	# Note right of dApp: Existing ERC721 tokens can also be set as Governance Tokens. <br />Verification is required.
  BrandManager ->> dApp: Input form to create Brand's DAO

  dApp -->> (SC)DAOFactory: Information for deployment, execute deploy script.
  Note right of (SC)DAOFactory: Use create() to generate the contract for the Brand's DAO, then create the Brand's DAO.
  (SC)DAOFactory ->> dApp: Return the addresses of the deployed contracts<br />- Timelock<br />- Governor<br />- Governance Token<br />-

```
