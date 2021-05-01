import { useState } from 'react';
import './index.css';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export const Send = () => {
  const [isLoading, setIsLoading] = useState(false);

  const submitTx = async () => {
    setIsLoading(true);

    function timeout() {
      return new Promise((resolve) => setTimeout(resolve, 2000));
    }

    await timeout();
    setIsLoading(false);
  };

  return (
    <div className="send">
      <div className="send__form-wrapper">
        <div className="send__input-wrapper">
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
