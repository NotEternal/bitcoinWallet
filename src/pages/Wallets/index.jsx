import './index.sass';
import { WalletItem } from './WalletItem';
import { RiBitCoinFill } from 'react-icons/ri';

export const Wallets = (props) => {
  const { wallets } = props;
  const { btc = [] } = wallets;

  return (
    <div className="wallets">
      <h2 className="page-title">WALLETS</h2>

      {btc.length ? (
        btc.map((wallet, index) => {
          return (
            <WalletItem
              walletIcon={<RiBitCoinFill size="100%" color="inherit" />}
              wallet={wallet}
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
