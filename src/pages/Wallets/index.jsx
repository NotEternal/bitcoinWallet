import './index.css';
import { WalletItem } from './WalletItem';

export const Wallets = () => {
  const wallets = [
    { type: 'btc', address: 'mpb5DPTbz6mpb5DPTbz6sdf89912h', balance: 2.4561 },
  ];

  return (
    <div className="wallets">
      <h2>Wallets</h2>

      {wallets.map((wallet, index) => {
        return (
          <WalletItem
            type={wallet.type}
            address={wallet.address}
            balance={wallet.balance}
            shortAddress={true}
            key={index}
          />
        );
      })}
    </div>
  );
};
