import './index.css';
import { IoIosSunny, IoMdMoon } from 'react-icons/io';
import { AiFillHome, AiOutlineSend, AiOutlineSetting } from 'react-icons/ai';

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
            <AiFillHome size="100%" color="var(--color)" />
          </button>
        </li>
        <li>
          <button
            className="navigation__button"
            onClick={() => activePage('send')}
          >
            <AiOutlineSend size="100%" color="var(--color)" />
          </button>
        </li>
        <li>
          <button
            className="navigation__button"
            onClick={() => activePage('settings')}
          >
            <AiOutlineSetting size="100%" color="var(--color)" />
          </button>
        </li>
      </ul>

      <button className="navigation__theme-button" onClick={changeTheme}>
        {isDark ? (
          <IoIosSunny size="100%" color="var(--color)" />
        ) : (
          <IoMdMoon size="100%" color="var(--color)" />
        )}
      </button>
    </nav>
  );
};
