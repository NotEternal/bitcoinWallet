import './index.css';
import { WalletItem } from './WalletItem';

export const Wallets = (props) => {
  const { wallets } = props;
  const { btc } = wallets;

  return (
    <div className="wallets">
      <h2>WALLETS</h2>

      {btc.length
        ? btc.map((wallet, index) => {
            return (
              <WalletItem
                ticker={wallet.ticker}
                address={wallet.address}
                balance={wallet.balance}
                key={index}
              />
            );
          })
        : 'No bitcoin wallets'}
    </div>
  );
};
