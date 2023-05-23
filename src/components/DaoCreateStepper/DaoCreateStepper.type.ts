export type CreateParamsForm = {
    daoName: string
    vote_maximumSupply: number
    vote_name: string
    vote_symbol: string
    vote_URI: string
    timelock_minDelay: number
    governance_votingDelay: number
    governance_votingPeriod: number
    governance_quorumPercentage: number
  }