import { useState } from 'react';
import './App.css';
import { saveUserData } from '../common/data';
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

  // Wallets =============================
  const strWallets = window.localStorage.getItem('wallets') || '{}';
  const localStorageWallets = JSON.parse(strWallets);
  const [wallets, setWallets] = useState(localStorageWallets);

  function onLogout(event) {
    event.preventDefault();
    delete event['returnValue'];

    saveUserData({
      name: 'wallets',
      data: JSON.stringify(wallets),
    });
  }

  if (typeof window !== 'undefined') {
    window.addEventListener('beforeunload', onLogout);
  }

  function setWallet(params) {
    const { name, wallet } = params;
    const walletsByName = wallets[name] || [];

    setWallets({
      ...wallets,
      [name]: [...walletsByName, wallet],
    });
  }

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
                  setWallets={setWallets}
                  setWallet={setWallet}
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
