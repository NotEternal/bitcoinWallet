import * as BtcLib from 'bitcoinjs-lib';
import * as bip39 from 'bip39';
import * as bip32 from 'bip32';

class BtcLikeCoin {
  constructor(params) {
    const { name, ticker, precision } = params;

    this.name = name;
    this.ticker = ticker;
    this.precision = precision;
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
      mnemonic,
      pubKey: node.publicKey,
      privKey: node.privateKey,
      address: account.address,
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

  getBalance = () => {
    return new Promise((res, rej) => {
      res(0);
    });
  };

  restoreWallet = (params) => {
    const { network, mnemonic } = params;
    const seed = bip39.mnemonicToSeedSync(mnemonic);
    const root = bip32.fromSeed(seed, network);
    const node = root.derivePath(`m/44'/0'/0'/0/0`);

    const account = BtcLib.payments.p2pkh({
      pubkey: node.publicKey,
      network: network,
    });

    console.log('getWallet');
    console.log('seed: ', seed);
    console.log('root: ', root);
    console.log('node: ', node);
    console.log('account: ', account);

    return {
      balance: 0,
      ticker: this.ticker,
      precision: this.precision,
      mnemonic,
      pubKey: node.publicKey,
      privKey: node.privateKey,
      address: account.address,
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
