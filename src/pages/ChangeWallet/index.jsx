import './index.css';
import Coin from '../../common/Coin';
import { Button } from '../../components/Button';

export const ChangeWallet = () => {
  const handleCreate = () => {
    Coin.BTC.createWallet();
  };

  const handleRestore = () => {
    Coin.BTC.restoreWallet({
      mnemonic: '',
    });
  };

  return (
    <div className="change-wallet">
      <h2>Wallet actions</h2>
      <Button onClick={handleCreate}>Create</Button>{' '}
      <Button onClick={handleRestore}>Restore</Button>
    </div>
  );
};
