import { useState, useRef } from 'react';
import { AiFillCopy } from 'react-icons/ai';

export const WalletItem = (props) => {
  const { ticker, address, balance, shortAddress } = props;
  const [isCopied, setIsCopied] = useState('');
  const textAreaRef = useRef(null);

  const onCopy = (event) => {
    textAreaRef.current.select();
    document.execCommand('copy');
    event.target.focus();

    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 600);
  };

  const partOfTheAddress =
    address.substr(0, 4) + // 4 chars
    '...' +
    address.substr(address.length - 3, address.length); // 3 chars

  const fixBalance = () => {
    let strBalance = String(balance);
    const hasDecimals = strBalance.split('.').length > 1;
    const tooLong = hasDecimals && strBalance.split('.')[1].length > 6; // six just for display

    if (tooLong) {
      strBalance = Number.parseFloat(strBalance).toFixed(5).toString() + '...';
    }

    return strBalance;
  };

  return (
    <div className="wallet-item">
      <div className="wallet-item__header">
        <span className="wallet-item__ticker">{ticker.toUpperCase()}</span>{' '}
        <span className="wallet-item__balance-wrapper">
          <span className="wallet-item__crypto">{fixBalance()}</span>
          <span className="wallet-item__fiat">{fixBalance()}</span>
        </span>
      </div>

      <span className="wallet-item__address">
        <form>
          <textarea ref={textAreaRef} defaultValue={address} />
        </form>

        {shortAddress ? partOfTheAddress : address}

        {document.queryCommandSupported('copy') && (
          <button className="wallet-item__copy-button" onClick={onCopy}>
            {isCopied && <span className="wallet-item__copy-tip">Copied!</span>}
            <AiFillCopy size="100%" color="var(--color)" />
          </button>
        )}
      </span>
    </div>
  );
};
