import * as BtcLib from 'bitcoinjs-lib';
import * as bip39 from 'bip39';
import * as bip32 from 'bip32';
import BigNumber from 'bignumber.js';
import testnetConfig from '../config/testnet';

class UtxoCoin {
  constructor(params) {
    const { name, ticker, precision, api } = params;

    this.name = name;
    this.ticker = ticker;
    this.precision = precision;
    this.api = api;
  }

  createWallet = (params) => {
    const { network } = params;
    const mnemonic = bip39.generateMnemonic();
    const seed = bip39.mnemonicToSeedSync(mnemonic);
    const root = bip32.fromSeed(seed, network);
    const node = root.derivePath(`m/44'/0'/0'/0/0`);
    const account = BtcLib.payments.p2pkh({
      pubkey: node.publicKey,
      network,
    });

    const newWallet = {
      balance: 0,
      ticker: this.ticker,
      precision: this.precision,
      pubKey: node.publicKey,
      privKey: node.privateKey,
      address: account.address,
      mnemonic,
      network,
    };

    return newWallet;
  };

  getBalance = async (params) => {
    const { address, network } = params;

    if (window.fetch) {
      const response = await fetch(`${this.api}/address/${address}/balance/`);
      const data = await response.json();
      const { balance: satoshiBalance, unconfirmed } = data;

      return new BigNumber(satoshiBalance).dividedBy(100_000_000).toNumber();
    } else {
      alert("your browser doesn't support this fetching balance");
      return 0;
    }
  };

  restoreWallet = async (params) => {
    const { network, mnemonic } = params;

    try {
      const seed = bip39.mnemonicToSeedSync(mnemonic);
      const root = bip32.fromSeed(seed, network);
      const node = root.derivePath(`m/44'/0'/0'/0/0`);

      const account = BtcLib.payments.p2pkh({
        pubkey: node.publicKey,
        network: network,
      });

      const balance = await this.getBalance({
        address: account.address,
        network,
      });

      return {
        balance,
        ticker: this.ticker,
        precision: this.precision,
        pubKey: node.publicKey,
        privKey: node.privateKey,
        address: account.address,
        mnemonic,
        network,
      };
    } catch (e) {
      console.error(e);
      return false;
    }
  };

  send = async () => {
    //
  };
}

const Coin = Object.freeze({
  BTC: new UtxoCoin({
    name: 'Bitcoin',
    ticker: 'BTC',
    precision: 8,
    api: testnetConfig.BTC.api,
  }),
});

export default Coin;
