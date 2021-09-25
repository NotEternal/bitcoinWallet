import { ethers } from 'ethers'
import * as constants from '../constants'
import * as types from '../types'

export const blockchains: {
  [k: number]: types.BlockchainData
} = {
  [constants.blockchains.ETHEREUM]: {
    name: 'Ethereum',
    explorer: 'https://etherscan.io',
    provider: new ethers.providers.JsonRpcProvider(
      'https://mainnet.infura.io/v3/d7e0a3d00ed147d4aefaf11b0370f70b'
    ),
  },
  [constants.blockchains.BINANCE_SMART_CHAIN]: {
    name: 'Binance Smart Chain',
    explorer: 'https://bscscan.com',
    provider: new ethers.providers.JsonRpcProvider(
      'https://bsc-dataseed.binance.org/'
    ),
  },
  [constants.blockchains.POLYGON]: {
    name: 'Polygon',
    explorer: 'https://polygonscan.com',
    provider: new ethers.providers.JsonRpcProvider(
      'https://rpc-mainnet.maticvigil.com'
    ),
  },
  [constants.blockchains.RINKEBY]: {
    name: 'Ethereum Rinkeby',
    explorer: 'https://rinkeby.etherscan.io',
    provider: new ethers.providers.JsonRpcProvider(
      'https://rinkeby.infura.io/v3/d7e0a3d00ed147d4aefaf11b0370f70b'
    ),
  },
  [constants.blockchains.BINANCE_TESTNET]: {
    name: 'Binance Smart Chain Testnet',
    explorer: 'https://bscscan.com',
    provider: new ethers.providers.JsonRpcProvider(
      'https://data-seed-prebsc-1-s1.binance.org:8545/'
    ),
  },
  [constants.blockchains.MUMBAI]: {
    name: 'Polygon Mumbai',
    explorer: 'https://explorer-mumbai.maticvigil.com',
    provider: new ethers.providers.JsonRpcProvider(
      'https://rpc-mumbai.maticvigil.com'
    ),
  },
}
