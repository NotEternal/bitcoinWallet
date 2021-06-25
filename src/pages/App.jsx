import { useState, useEffect } from 'react';
import './App.css';
import { ErrorBoundary } from '../components/ErrorBoundary';
import { Settings } from './Settings';
import { Navigation } from '../components/Navigation';
import { Wallets } from './Wallets';
import { Transfer } from './Transfer';
import { Notification } from '../components/Notification';

export const App = () => {
  // Notifications ================================
  const [showNotification, setShowNotification] = useState(false);

  // Default theme ================================
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  const localStorageDark = window.localStorage.getItem('dark');
  const darkThemeIsActive = localStorageDark
    ? localStorageDark === 'true'
    : prefersDarkScheme.matches;
  const [isDark, setIsDark] = useState(darkThemeIsActive);

  // Default page =================================
  const localStoragePage = window.localStorage.getItem('page');
  const defaultPage = localStoragePage ? localStoragePage : 'wallet';
  const [activePage, setActivePage] = useState(defaultPage);

  // Checking wallets =============================
  const strWallets = window.localStorage.getItem('wallets') || '{}';
  const localStorageWallets = JSON.parse(strWallets);
  const [wallets, setWallets] = useState(localStorageWallets);

  if (!Object.keys(wallets).length) {
    window.localStorage.setItem(
      'wallets',
      JSON.stringify({
        btc: [],
      })
    );
  }

  const setBtcWallet = (newWallet) => {
    setWallets({
      ...wallets,
      btc: [...wallets.btc, ...newWallet],
    });
  };

  useEffect(() => {
    window.localStorage.setItem(
      'wallets',
      JSON.stringify({
        ...wallets,
      })
    );
  }, [wallets]);

  return (
    <div className={`App ${isDark ? '' : 'light'}`}>
      <div className="App-body">
        <ErrorBoundary>
          <>
            {showNotification && (
              <Notification setShowNotification={setShowNotification} />
            )}

            <div className="App-body__page-wrapper">
              {activePage === 'wallet' && <Wallets wallets={wallets} />}
              {activePage === 'transfer' && <Transfer wallets={wallets} />}
              {activePage === 'settings' && (
                <Settings
                  setBtcWallet={setBtcWallet}
                  setActivePage={setActivePage}
                />
              )}
            </div>

            <header>
              <Navigation
                setActivePage={setActivePage}
                setIsDark={setIsDark}
                isDark={isDark}
              />
            </header>
          </>
        </ErrorBoundary>
      </div>
    </div>
  );
};
