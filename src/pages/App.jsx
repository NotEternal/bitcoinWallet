import { useState, useEffect } from 'react';
import './App.css';
import { ErrorBoundary } from '../components/ErrorBoundary';
import { ChangeWallet } from './ChangeWallet';
import { Header } from '../components/Header';
import { Wallets } from './Wallets';
import { Send } from './Send';

export const App = () => {
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
    : 
    prefersDarkScheme.matches;
  const [isDark, setIsDark] = useState(darkThemeIsActive);

  // Default page =================================

  const localStoragePage = window.localStorage.getItem('page');
  const defaultPage = localStoragePage ? localStoragePage : 'wallet';
  const [activePage, setActivePage] = useState(defaultPage);

  // Checking wallets =============================

  const [hasAnyWallet, setHasAnyWallet] = 
    useState(false);

  useEffect(() => {
    const strWallets = window.localStorage.getItem('wallets') || '{}';
    const wallets = JSON.parse(strWallets);
    const btcWallets = wallets.btc;

    setHasAnyWallet(btcWallets.length ? true : false);
  }, [setHasAnyWallet])

  return (
    <div className={`App ${isDark ? '' : 'light'}`}>
      <div className="App-body">
        <ErrorBoundary>
          <>
            <Header
              setActivePage={setActivePage}
                setIsDark={setIsDark}
              isDark={isDark}
            />

            <div className="App-body__page-wrapper">
                {activePage === 'wallet' && <Wallets />}
              {activePage === 'send' && <Send />}

              {activePage === 'changeWallet' && <ChangeWallet />}
              {hasAnyWallet && <ChangeWallet />}
            </div>
          </>
        </ErrorBoundary>
      </div>
    </div>
  )
};
