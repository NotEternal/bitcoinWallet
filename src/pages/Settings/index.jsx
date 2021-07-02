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
  const { setActivePage, setWallets, setWallet } = props;
  const [showRestoreBlock, setShowRestoreBlock] = useState(false);

  const toggleRestoreBlockVisibility = () => {
    setShowRestoreBlock(!showRestoreBlock);
  };

  const [showSavingTheMnemonic, setShowSavingTheMnemonic] = useState(false);
  const [newWallet, setNewWallet] = useState(undefined);
  const [newMnemonic, setNewMnemonic] = useState('');

  const handleCreate = () => {
    const newWallet = Coin.BTC.createWallet({
      network: BtcLib.networks.testnet,
    });

    prepareNewWallet(newWallet);
  };

  const prepareNewWallet = (wallet) => {
    setNewWallet(wallet);
    setNewMnemonic(wallet.mnemonic);
    setShowSavingTheMnemonic(true);
  };

  const saveWallet = (params) => {
    if (newWallet) {
      setWallet({
        name: newWallet.ticker,
        wallet: newWallet,
      });

      window.localStorage.setItem('page', 'wallet');
      setActivePage('wallet');
    }
  };

  const handleRestore = (mnemonic) => {
    // Coin.BTC.restoreWallet({
    //   mnemonic,
    // });
  };

  const handleLogout = () => {
    setWallets({});
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
        <Button onClick={toggleRestoreBlockVisibility}>
          <span className="settings__icon">
            <MdRestore size="100%" color="inherit" />
          </span>
          Restore
        </Button>{' '}
        <Button onClick={handleLogout}>
          <span className="settings__icon">
            <IoMdExit size="100%" color="inherit" />
          </span>
          Logout
        </Button>
      </div>

      {showSavingTheMnemonic && (
        <div>
          <p className="warning">
            Please save this mnemonic phrase in the safe place. You will be able
            to restore your wallet only with this phrase
          </p>
          <textarea
            defaultValue={newMnemonic}
            className="mnemonic-phrase-field"
          />
          <div className="settings__mnemonic-buttons">
            <button onClick={() => saveWallet()}>I saved</button>
            <button onClick={() => setShowSavingTheMnemonic(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}

      {showRestoreBlock && (
        <div className="settings__restore-block">
          <Input type="text" />

          <div className="settings__restore-buttons">
            <button onClick={handleRestore}>Restore</button>
            <button onClick={() => setShowRestoreBlock(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};
