import './index.css';

export const Header = (props) => {
  const { isDark, setIsDark, setActivePage } = props;

  const activePage = (page) => {
    window.localStorage.setItem('page', page);
    setActivePage(page);
  };

  const changeTheme = () => {
    window.localStorage.setItem('dark', `${!isDark}`);
    setIsDark(!isDark);
  };

  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li>
            <button
              className="header__page-tab"
              onClick={() => activePage('wallet')}
            >
              WALLET
            </button>
          </li>
          <li>
            <button
              className="header__page-tab"
              onClick={() => activePage('send')}
            >
              SEND
            </button>
          </li>
          <li>
            <button
              className="header__page-tab"
              onClick={() => activePage('changeWallet')}
            >
              CHANGE
            </button>
          </li>
        </ul>
      </nav>

      <div className="header__them-wrapper">
        <input
          onChange={changeTheme}
          type="checkbox"
          id="header__theme-checkbox"
          hidden
        />
        <label
          className="header__theme-fakecheckbox"
          htmlFor="header__theme-checkbox"
        ></label>
      </div>
    </header>
  );
};
