import './index.css';
import Icons from '../../images';

export const Navigation = (props) => {
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
    <nav className="navigation">
      <ul className="navigation__list">
        <li>
          <button
            className="navigation__button"
            onClick={() => activePage('wallet')}
          >
            <img className="navigation__img" src={Icons.home} alt="home icon" />
          </button>
        </li>
        <li>
          <button
            className="navigation__button"
            onClick={() => activePage('send')}
          >
            <img className="navigation__img" src={Icons.send} alt="send icon" />
          </button>
        </li>
        <li>
          <button
            className="navigation__button"
            onClick={() => activePage('settings')}
          >
            <img
              className="navigation__img"
              src={Icons.settings}
              alt="settings icon"
            />
          </button>
        </li>
      </ul>

      <button className="navigation__theme-button" onClick={changeTheme}>
        <img
          className="navigation__img"
          src={isDark ? Icons.sun : Icons.moon}
          alt="theme icon"
        />
      </button>
    </nav>
  );
};
