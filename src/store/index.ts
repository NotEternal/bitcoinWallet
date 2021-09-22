import create from 'zustand'

interface Wallet {
  name: string
  address: string
  privateKey: string
  publicKey: string
  balance: number
}

type Address = string

interface Store {
  wallets: {
    [k: Address]: Wallet
  }
}

const useStore = create<Store>((set) => ({
  wallets: {},

  addWallet: (address: string, wallet: Wallet) => {
    set((state) => ({
      wallets: { ...state.wallets, [address]: wallet },
    }))
  },

  removeWallet: (address: string) => {
    set((state) => {
      delete state.wallets[address]

      return {
        wallets: { ...state.wallets },
      }
    })
  },
}))

export default useStore
