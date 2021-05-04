import { useState, useEffect } from 'react';
import './App.css';
import { ErrorBoundary } from '../components/ErrorBoundary';
import { Settings } from './Settings';
import { Navigation } from '../components/Navigation';
import { Wallets } from './Wallets';
import { Send } from './Send';
import { Notification } from '../components/Notification';

export const App = () => {
  const [showNotification, setShowNotification] = useState(false);

  // Default settings =============================

  const hasLocalSettings = window.localStorage.getItem('wallets');

  if (!hasLocalSettings) {
    window.localStorage.setItem(
      'wallets',
      JSON.stringify({
        btc: [],
      })
    );
  }

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

  const [hasAnyWallet, setHasAnyWallet] = useState(false);

  useEffect(() => {
    const strWallets = window.localStorage.getItem('wallets') || '{}';
    const wallets = JSON.parse(strWallets);
    const btcWallets = wallets.btc;

    setHasAnyWallet(!!btcWallets.length);
  }, [setHasAnyWallet]);

  return (
    <div className={`App ${isDark ? '' : 'light'}`}>
      <div className="App-body">
        <ErrorBoundary>
          <>
            {showNotification && (
              <Notification setShowNotification={setShowNotification} />
            )}

            <div className="App-body__page-wrapper">
              {activePage === 'wallet' && <Wallets />}
              {activePage === 'send' && <Send />}
              {activePage === 'settings' && <Settings />}
              {hasAnyWallet && <Settings />}
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
