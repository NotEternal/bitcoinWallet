import Web3 from 'web3'
import blockchains from '../constants/blockchains'

export default {
  [blockchains.ETHEREUM]: {
    explorer: 'https://etherscan.io',
    web3: new Web3(new Web3.providers.HttpProvider('')),
  },
  [blockchains.BINANCE_SMART_CHAIN]: {
    explorer: 'https://bscscan.com',
    web3: new Web3(new Web3.providers.HttpProvider('')),
  },
  [blockchains.POLYGON]: {
    explorer: 'https://polygonscan.com',
    web3: new Web3(new Web3.providers.HttpProvider('')),
  },
}
