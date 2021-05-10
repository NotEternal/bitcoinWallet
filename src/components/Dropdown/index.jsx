import { IoIosArrowDown } from 'react-icons/io';
import { useState } from 'react';
import './index.css';

export const Dropdown = (props) => {
  const { list } = props;
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);

  const onClick = () => {
    if (list.length === 1) return;

    setDropdownIsOpen(!dropdownIsOpen);
  };

  return (
    <div
      className={`dropdown ${dropdownIsOpen ? 'open' : ''}`}
      onClick={onClick}
    >
      {list.length === 1 ? (
        <div className="dropdown__list">
          <div>{list[0]}</div>
        </div>
      ) : (
        <div className="dropdown__list many">
          {list.map((item, index) => {
            return (
              <div
                className={`dropdown__item ${index ? 'hidden' : ''}`}
                key={index}
              >
                {item}
              </div>
            );
          })}
        </div>
      )}

      {!dropdownIsOpen && <IoIosArrowDown size="1.1rem" color="var(--color)" />}
    </div>
  );
};
