import bip39 from 'bip39'
import { hdkey } from 'ethereumjs-wallet'
import CryptoJS from 'crypto-js/core'
import testnet from '../configs/testnet'

export const createWallet = (params: { chainId: number }) => {
  const { chainId } = params

  if (testnet[chainId]) {
    const { web3 } = testnet[chainId]

    // todo: + entropy
    const mnemonic = bip39.generateMnemonic()
    const seed = bip39.mnemonicToSeedSync(mnemonic)
    const hdWallet = hdkey.fromMasterSeed(seed)
    // todo: add a different wallet number
    const wallet = hdWallet.derivePath(`m/44'/60'/0'/0/0`).getWallet()
    const publicKey = wallet.getPublicKey()
    const privateKey = wallet.getPrivateKey()
    const account = web3.eth.accounts.privateKeyToAccount(
      `0x${privateKey.toString('Hex')}`
    )

    return {
      mnemonic,
      wallet: {
        chainId,
        address: `0x${wallet.getAddress().toString('Hex')}`,
        publicKey: `0x${publicKey.toString('Hex')}`,
        privateKey: `0x${privateKey.toString('Hex')}`,
        signTransaction: account.signTransaction,
        sign: account.sign,
        // encrypt: account.encrypt
      },
    }
  } else {
    throw new Error('wrong chainId')
  }
}
