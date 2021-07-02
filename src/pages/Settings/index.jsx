import { useState } from 'react';
import * as BtcLib from 'bitcoinjs-lib';
import { MdRestore } from 'react-icons/md';
import { IoMdExit } from 'react-icons/io';
import { IoCreateOutline } from 'react-icons/io5';
import './index.sass';
import Coin from '../../common/coin';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

export const Settings = (props) => {
  const { setActivePage, setWallet } = props;
  const [showRestoreBlock, setShowRestoreBlock] = useState(false);

  const handleCreate = () => {
    const newWallet = Coin.BTC.createWallet({
      network: BtcLib.networks.testnet,
    });

    setWallet({
      name: 'btc',
      wallet: newWallet,
    });

    window.localStorage.setItem('page', 'wallet');
    setActivePage('wallet');
  };

  const handleRestore = (mnemonic) => {
    Coin.BTC.restoreWallet({
      mnemonic,
    });
  };

  const handleLogout = () => {
    window.localStorage.clear();
  };

  return (
    <div className="settings">
      <h2 className="page-title">SETTINGS</h2>

      <div className="settings__buttons-wrapper">
        <Button onClick={handleCreate}>
          <span className="settings__icon">
            <IoCreateOutline size="100%" color="inherit" />
          </span>
          Create
        </Button>{' '}
        <Button onClick={() => setShowRestoreBlock(true)}>
          <span className="settings__icon">
            <MdRestore size="100%" color="inherit" />
          </span>
          Mnemonic
        </Button>{' '}
        <Button onClick={handleLogout}>
          <span className="settings__icon">
            <IoMdExit size="100%" color="inherit" />
          </span>
          Logout
        </Button>
      </div>

      {showRestoreBlock && (
        <div className="settings__restore-block">
          <Input type="text" />

          <div className="settings__restore-buttons">
            <button
            // onClick={handleRestore}
            >
              Restore
            </button>
            <button onClick={() => setShowRestoreBlock(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};
