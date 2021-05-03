import Coin from '../../src/common/Coin';

const testAccount = '';

describe('Coin tests', () => {
  beforeEach(() => {
    //
  });

  test('Create new wallet: should return a string', () => {
    expect(Coin.createWallet()).toBe();
  });

  test('Restore wallet: should return a string', () => {
    expect(Coin.restoreWallet()).toBe();
  });

  test('Get balance: should return a number', () => {
    expect(Coin.getBalance()).toBe();
  });

  test('Get wallet: should return an object', () => {
    expect(
      Coin.getWallet({
        network: '',
        mnemonic: '',
      })
    ).toBe();
  });

  test('Send: should return a Promise with data', async () => {
    try {
      const response = await Coin.send({});

      expect(response).toBe({
        //
      });
    } catch (error) {
      expect(error).toBe('');
    }
  });
});
