import Web3 from 'web3'
import blockchains from '../constants/blockchains'

export default {
  [blockchains.RINKEBY]: {
    explorer: 'https://rinkeby.etherscan.io',
    web3: new Web3(new Web3.providers.HttpProvider('')),
  },
  [blockchains.MUMBAI]: {
    explorer: 'https://explorer-mumbai.maticvigil.com',
    web3: new Web3(
      new Web3.providers.HttpProvider('https://rpc-mumbai.maticvigil.com')
    ),
  },
}
