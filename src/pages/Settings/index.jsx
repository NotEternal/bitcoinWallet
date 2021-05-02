import './index.css';
// import Coin from '../../common/Coin';
import { Button } from '../../components/Button';

export const Settings = () => {
  const handleCreate = () => {
    // Coin.BTC.createWallet();
  };

  const handleRestore = () => {
    // Coin.BTC.restoreWallet({
    //   mnemonic: '',
    // });
  };

  const handleLogout = () => {
    //
  };

  return (
    <div className="settings">
      <h2>SETTINGS</h2>
      <Button onClick={handleCreate}>Create</Button>{' '}
      <Button onClick={handleRestore}>Restore</Button>{' '}
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
};
