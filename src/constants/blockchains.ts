interface Blockchains {
  [k: string]: number
}

export default Object.freeze<Blockchains>({
  ETHEREUM: 1,
  RINKEBY: 4,
  POLYGON: 137,
  MUMBAI: 80001,
  BINANCE_SMART_CHAIN: 56,
})
