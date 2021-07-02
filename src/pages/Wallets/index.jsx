import './index.sass';
import { WalletItem } from './WalletItem';
import { RiBitCoinFill } from 'react-icons/ri';

export const Wallets = (props) => {
  const { wallets } = props;

  return (
    <div className="wallets">
      <h2 className="page-title">WALLETS</h2>

      {Object.keys(wallets).length ? (
        <>
          {Object.keys(wallets).map((walletName, index) => {
            if (wallets[walletName].length) {
              return (
                <div key={index}>
                  {wallets[walletName].map((wallet, index) => {
                    return (
                      <WalletItem
                        walletIcon={
                          <RiBitCoinFill size="100%" color="inherit" />
                        }
                        wallet={wallet}
                        key={index}
                      />
                    );
                  })}
                </div>
              );
            }

            return null;
          })}
        </>
      ) : (
        <p className="wallets__not-wallet">No wallets</p>
      )}
    </div>
  );
};
