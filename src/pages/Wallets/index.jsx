import './index.css';
import { WalletItem } from './WalletItem';

export const Wallets = (props) => {
  const { wallets } = props;
  const { btc } = wallets;

  return (
    <div className="wallets">
      <h2 className="page-title">WALLETS</h2>

      {btc.length ? (
        btc.map((wallet, index) => {
          return (
            <WalletItem
              ticker={wallet.ticker}
              address={wallet.address}
              balance={wallet.balance}
              key={index}
            />
          );
        })
      ) : (
        <p className="wallets__not-wallet">No Bitcoin wallets</p>
      )}
    </div>
  );
};
