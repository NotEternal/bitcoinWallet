import { IoIosArrowDown } from 'react-icons/io';
import './index.css';

export const Dropdown = (props) => {
  const { list } = props;

  return (
    <div className="dropdown">
      {list.length === 1 ? (
        <ul className="dropdown__list">
          <li>
            <span>{list[0].ticker}</span>
            <span>{list[0].address}</span>
          </li>
        </ul>
      ) : (
        <ul className="dropdown__list many">
          {list.map((item, index) => {
            return (
              <li
                className={`dropdown__item ${index ? 'hidden' : ''}`}
                key={index}
              >
                <span>{item.ticker}</span>
                <span>{item.address}</span>
              </li>
            );
          })}
        </ul>
      )}

      <IoIosArrowDown color="var(--color)" />
    </div>
  );
};
