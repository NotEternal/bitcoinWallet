import Web3 from 'web3'
import * as constants from '../constants'
import * as types from '../types'

//@ts-ignore
export const blockchains: {
  [k: number]: types.BlockchainData
} = {
  [constants.blockchains.ETHEREUM]: {
    name: 'Ethereum',
    explorer: 'https://etherscan.io',
    // web3: new Web3(new Web3.providers.HttpProvider('')),
  },
  [constants.blockchains.BINANCE_SMART_CHAIN]: {
    name: 'Binance Smart Chain',
    explorer: 'https://bscscan.com',
    // web3: new Web3(new Web3.providers.HttpProvider('')),
  },
  [constants.blockchains.POLYGON]: {
    name: 'Polygon',
    explorer: 'https://polygonscan.com',
    // web3: new Web3(new Web3.providers.HttpProvider('')),
  },
  [constants.blockchains.RINKEBY]: {
    name: 'Ethereum Rinkeby',
    explorer: 'https://rinkeby.etherscan.io',
    // web3: new Web3(new Web3.providers.HttpProvider('')),
  },
  [constants.blockchains.MUMBAI]: {
    name: 'Polygon Mumbai',
    explorer: 'https://explorer-mumbai.maticvigil.com',
    // web3: new Web3(new Web3.providers.HttpProvider('')),
  },
}
