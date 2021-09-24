import * as configs from '../configs'

interface Blockchains {
  [k: string]: number
}

export const blockchains: Blockchains = {
  ETHEREUM: 1,
  RINKEBY: 4,
  POLYGON: 137,
  MUMBAI: 80001,
  BINANCE_SMART_CHAIN: 56,
}
