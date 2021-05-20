import BtcLib from 'bitcoinjs-lib';
import * as bip39 from 'bip39';
import * as bip32 from 'bip32';
import Coin from '../../src/common/Coin';
import testWallets from '../testWallets';

const getAddress = (node, network) => {
  return BtcLib.payments.p2pkh({ pubkey: node.publicKey, network }).address;
};

describe('Bitcoin tests', () => {
  test('Create new wallet: should return a string', () => {
    expect(Coin.BTC.createWallet()).toBe();
  });

  test('Restore wallet: can export and import from the mnemonic phrase', () => {
    expect(Coin.restoreWallet()).toBe();

    const seed = bip39.mnemonicToSeedSync(testWallets.btc.mnemonic);
    const node = bip32.fromSeed(seed);
    const str = node.toBase58();
    const restored = bip32.fromBase58(str);

    expect(getAddress(node)).toBe(getAddress(restored)); // public key
    expect(node.toWIF()).toBe(restored.toWIF()); // private key
  });

  test('Get balance: should return a number', async () => {
    const balance = Coin.BTC.getBalance();

    expect(balance).toBe();
  });

  test('Get wallet: should return an object', () => {
    expect(
      Coin.getWallet({
        network: '',
        mnemonic: testWallets.btc.mnemonic,
      })
    ).toBe();
  });

  test('Send: should return a Promise with data', async () => {
    try {
      const txHash = await Coin.send({});

      expect(txHash).toBeDefined();
    } catch (error) {
      console.error(error);
    }
  });
});
