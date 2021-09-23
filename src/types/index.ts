export interface Wallet {
  chainId: number
  address: string
  publicKey: string
  privateKey: string
}

export type Address = string

export interface Wallets {
  [k: Address]: Wallet
}

export interface Store {
  wallets: Wallets
}
