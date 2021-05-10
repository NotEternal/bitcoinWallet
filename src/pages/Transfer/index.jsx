import { useState } from 'react';
import './index.css';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Dropdown } from '../../components/Dropdown';
import { DropdownItem } from './DropdownItem';

export const Transfer = (props) => {
  const { wallets } = props;
  const [isLoading, setIsLoading] = useState(false);

  const arrOfWallets = Object.keys(wallets).reduce((acc, key) => {
    return [...acc, ...wallets[key]];
  }, []);

  const dropdownList = arrOfWallets.map((item) => {
    return <DropdownItem ticker={item.ticker} address={item.address} />;
  });

  const submitTx = async () => {
    setIsLoading(true);

    function timeout() {
      return new Promise((resolve) => setTimeout(resolve, 2000));
    }

    await timeout();
    setIsLoading(false);
  };

  return (
    <div className="transfer">
      <h2 className="page-title">TRANSFER</h2>

      <Dropdown list={dropdownList} />

      <div className="transfer__form-wrapper">
        <div className="transfer__input-wrapper">
          <Input type="address" />
          <Input type="amount" />
        </div>

        <Button isLoading={isLoading} onClick={submitTx}>
          SEND
        </Button>
      </div>
    </div>
  );
};
