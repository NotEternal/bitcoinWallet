import BtcLib from 'bitcoinjs-lib';
import * as bip39 from 'bip39';
import * as bip32 from 'bip32';

class BtcLikeCoin {
  constructor(params) {
    const { name, ticker, precision } = params;

    this.name = name;
    this.ticker = ticker;
    this.precision = precision;

    console.log('%cCreate new Coin', 'color: pink;');
    console.log('name: ', this.name);
    console.log('ticker: ', this.ticker);
    console.log('precision: ', this.precision);
  }

  createWallet = () => {
    const mnemonicPhrase = bip39.generateMnemonic();
    const seed = bip39.mnemonicToSeedSync(mnemonicPhrase);
    const newWallet = {
      ticker: this.ticker,
      precision: this.precision,
      mnemonic: mnemonicPhrase,
      address: 'kljh324hoi234hhoewqrh', // TODO: address
      seed: seed,
      balance: 0,
    };
    const wallets = JSON.parse(window.localStorage.getItem('wallets') || '{}');

    window.localStorage.setItem(
      'wallets',
      JSON.stringify({
        ...wallets,
        btc: [...wallets.btc, newWallet],
      })
    );

    return newWallet;
  };

  restoreWallet = (params) => {
    console.log('restore wallet');

    const { mnemonic } = params;
    console.log('mnemonic: ', mnemonic);
    const address = 'abc...';

    return address;
  };

  getBalance = () => {
    console.log('get balance');

    return new Promise((res, rej) => {
      res(0);
    });
  };

  getWallet = (params) => {
    const { network, mnemonic } = params;
    const seed = bip39.mnemonicToSeedSync(mnemonic);
    const root = bip32.fromSeed(seed, network);
    const node = root.derivePath(`m/44'/0'/0'/0/0`);

    const account = BtcLib.payments.p2pkh({
      pubkey: node.publicKey,
      network: network,
    });

    return {
      mnemonic,
      address: account.address,
      publicKey: node.publicKey.toString('Hex'),
      WIF: node.toWIF(),
      node,
    };
  };

  send = async () => {
    //
  };
}

const Coin = Object.freeze({
  BTC: new BtcLikeCoin({
    name: 'Bitcoin',
    ticker: 'BTC',
    precision: 8,
  }),
});

export default Coin;
