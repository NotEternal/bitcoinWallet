import './index.css';
import { WalletItem } from './WalletItem';

export const Wallets = () => {
  const wallets = [
    {
      ticker: 'btc',
      address: 'mpb5DPTbz6mpb5DPTbz6sdf89912h',
      balance: 2.4561,
    },
    {
      ticker: 'eth',
      address: 'mpb5DPTbz6mpb5DPTbz6sdf89912h',
      balance: 13,
    },
  ];

  return (
    <div className="wallets">
      <h2>WALLETS</h2>

      {wallets.map((wallet, index) => {
        return (
          <WalletItem
            ticker={wallet.ticker}
            address={wallet.address}
            balance={wallet.balance}
            shortAddress={false}
            key={index}
          />
        );
      })}
    </div>
  );
};
