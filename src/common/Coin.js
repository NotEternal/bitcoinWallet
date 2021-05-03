import BtcLib from 'bitcoinjs-lib';
import bip39 from 'bip39';
import bip32 from 'bip32';

class BtcLikeCoin {
  constructor(params) {
    const { name, ticker, precision } = params;

    this.name = name;
    this.ticker = ticker;
    this.precision = precision;

    console.log('%c Create new Coin', 'color: green;');
    console.log('name: ', this.name);
    console.log('ticker: ', this.ticker);
    console.log('precision: ', this.precision);
  }

  createWallet = () => {
    console.log('create wallet');

    const mnemonicPhrase = bip39.generateMnemonic();
    const seed = bip39.mnemonicToSeedSync(mnemonicPhrase);
    const newWallet = 'abc...';

    console.log('seed: ', seed);
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

const Coin = {
  BTC: new BtcLikeCoin({
    name: 'Bitcoin',
    ticker: 'BTC',
    precision: 8,
  }),
};

export default Coin;
