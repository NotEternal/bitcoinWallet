import CryptoJS from 'crypto-js/core'
import testnet from '../config/testnet'

export const createWallet = (params: { chainId: number }) => {
  const { chainId } = params

  if (testnet[chainId]) {
    const { web3 } = testnet[chainId]

    // todo: + entropy
    const account = web3.eth.accounts.create()

    return {
      chainId,
      address: account.address,
      privateKey: account.privateKey,
      signTransaction: account.signTransaction,
      sign: account.sign,
      // encrypt: account.encrypt
    }
  } else {
    throw new Error('wrong chainId')
  }
}
