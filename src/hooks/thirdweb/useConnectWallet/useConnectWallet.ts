import { getChain } from '@/helper'
import {
  useAddress,
  useMetamask,
  useNetworkMismatch,
  useSwitchChain,
} from '@thirdweb-dev/react'

const chain = getChain()

export const useConnectWallet = () => {
  const address = useAddress()
  const connectWithMetamask = useMetamask()

  const switchChain = useSwitchChain()
  const isOnWrongNetwork = useNetworkMismatch()

  const connectWallet = () => {
    if (!address) {
      connectWithMetamask()
      return
    }

    if (isOnWrongNetwork) {
      switchChain(chain.chainId)
      return
    }
  }

  return { address, connectWallet }
}
