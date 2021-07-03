import { useState, useRef } from 'react';
import { AiFillCopy } from 'react-icons/ai';
import { GrUpdate } from 'react-icons/gr';

export const WalletItem = (props) => {
  const { walletIcon, wallet, shortAddress = false } = props;
  const [isCopied, setIsCopied] = useState('');
  const [showExtraInfo, setShowExtraInfo] = useState(false);
  const textAreaRef = useRef(null);

  const onCopy = (event) => {
    textAreaRef.current.select();
    document.execCommand('copy');
    event.target.focus();

    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 600);
  };

  const toogleExtraInfoVisibility = () => {
    setShowExtraInfo(!showExtraInfo);
  };

  // TODO: check window width and set a short address then
  const partOfTheAddress =
    wallet.address.substr(0, 4) + // 4 chars
    '...' +
    wallet.address.substr(wallet.address.length - 3, wallet.address.length); // 3 chars

  const fixBalance = () => {
    let strBalance = String(wallet.balance);
    const hasDecimals = strBalance.split('.').length > 1;
    const tooLong = hasDecimals && strBalance.split('.')[1].length > 6; // six just for display

    if (tooLong) {
      strBalance = Number.parseFloat(strBalance).toFixed(5).toString() + '...';
    }

    return strBalance;
  };

  // TODO: move into helpers
  function bufToHex(buffer) {
    return [...new Uint8Array(buffer)]
      .map((x) => x.toString(16).padStart(2, '0'))
      .join('');
  }

  return (
    <div className="wallet-item">
      <div className="wallet-item__header">
        <span className="wallet-item__icon">{walletIcon}</span>

        <span className="wallet-item__address">
          <span className="mono-font">
            {shortAddress ? partOfTheAddress : wallet.address}
          </span>
          <form>
            <textarea ref={textAreaRef} defaultValue={wallet.address} />
          </form>
          {document.queryCommandSupported('copy') && (
            <button className="wallet-item__copy-button" onClick={onCopy}>
              {isCopied && (
                <span className="wallet-item__copy-tip">Copied!</span>
              )}
              <AiFillCopy size="100%" color="var(--color)" />
            </button>
          )}
        </span>
      </div>

      <div className="wallet-item__middle">
        <span className="wallet-item__balance-wrapper">
          <span className="wallet-item__crypto mono-font">{fixBalance()} BTC</span>
          <button className="wallet-item__update-balance">
            <GrUpdate size="100%" color="inherit" />
          </button>
        </span>

        <div>
          <input
            type="checkbox"
            name="extra info"
            id="wallet-item__extra-info"
            onChange={toogleExtraInfoVisibility}
          />
          <label htmlFor="wallet-item__extra-info">Extra info</label>
        </div>
      </div>

      {showExtraInfo && (
        <div className="wallet-item__footer">
          Keys
          {/* <span className="key">{bufToHex(wallet.pubKey.data)}</span>
          <span className="key">{bufToHex(wallet.privKey.data)}</span> */}
        </div>
      )}
    </div>
  );
};
