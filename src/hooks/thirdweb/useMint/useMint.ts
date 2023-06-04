import {
  useContract, useSwitchChain, useAddress,
  useMetamask,
  useNetworkMismatch,
} from '@thirdweb-dev/react'
import { useContext } from 'react'

import { NftContractContext } from '@/contexts/NftContractProvider/NftContractProvider'
import { getChain } from '@/helper'

const chain = getChain()

export const useMint = () => {
  const { data: nftDrop } = useContract(
    process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
    'nft-drop'
  )
  const store = useContext(NftContractContext)

  const address = useAddress()
  const connectWithMetamask = useMetamask()
  const switchChain = useSwitchChain()
  const isOnWrongNetwork = useNetworkMismatch()

  const mint = async () => {
    if (!address) {
      connectWithMetamask()
      return
    }

    if (isOnWrongNetwork) {
      switchChain(chain.chainId)
      return
    }

    store.setIsClaiming && store.setIsClaiming(true)

    try {
      const minted = await nftDrop?.claim(1)
      console.log(minted)
      alert(`Successfully minted NFT!`)
    } catch (error) {
      console.error(error)
      alert(error)
    } finally {
      store.setIsClaiming && store.setIsClaiming(false)
    }
  }

  return { mint }
}
