import { useState } from 'react';
import * as BtcLib from 'bitcoinjs-lib';
import { MdRestore } from 'react-icons/md';
import { IoMdExit } from 'react-icons/io';
import { IoCreateOutline } from 'react-icons/io5';
import { GrStatusGood } from 'react-icons/gr';
import { TiCancelOutline } from 'react-icons/ti';
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

  const saveWallet = () => {
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

  const [confirmLogout, setConfirmLogout] = useState(false);

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
        <Button onClick={() => setConfirmLogout(true)}>
          <span className="settings__icon">
            <IoMdExit size="100%" color="inherit" />
          </span>
          Logout
        </Button>
      </div>

      {/* 

      TODO: move code below as individual components 

      */}

      {showSavingTheMnemonic && (
        <section className="settings__section">
          <p className="warning">
            Please save this mnemonic phrase in the safe place. You will be able
            to restore your wallet only with this phrase
          </p>
          <p className="new-mnemonic-phrase">{newMnemonic}</p>

          <div>
            <Button type="small" onClick={saveWallet}>
              <span className="settings__icon">
                <GrStatusGood size="100%" color="inherit" />
              </span>
              I saved
            </Button>{' '}
            <Button
              type="small"
              onClick={() => setShowSavingTheMnemonic(false)}
            >
              <span className="settings__icon">
                <TiCancelOutline size="100%" color="inherit" />
              </span>
              Cancel
            </Button>
          </div>
        </section>
      )}

      {showRestoreBlock && (
        <section className="settings__section">
          <Input type="text" />

          <div>
            <Button type="small" onClick={handleRestore}>
              <span className="settings__icon">
                <MdRestore size="100%" color="inherit" />
              </span>
              Restore
            </Button>{' '}
            <Button type="small" onClick={() => setShowRestoreBlock(false)}>
              <span className="settings__icon">
                <TiCancelOutline size="100%" color="inherit" />
              </span>
              Close
            </Button>
          </div>
        </section>
      )}

      {confirmLogout && (
        <section className="settings__section">
          <p className="warning">
            It cleans all data from your browser. Are you sure ?
          </p>

          <div>
            <Button type="small" onClick={handleLogout}>
              <span className="settings__icon">
                <MdRestore size="100%" color="inherit" />
              </span>
              Confirm
            </Button>{' '}
            <Button type="small" onClick={() => setConfirmLogout(false)}>
              <span className="settings__icon">
                <TiCancelOutline size="100%" color="inherit" />
              </span>
              Cancel
            </Button>
          </div>
        </section>
      )}
    </div>
  );
};
