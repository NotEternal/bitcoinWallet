export const WalletItem = (props) => {
  const { type, address, balance, shortAddress } = props;

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
    <div className="wallet__item">
      <p className="wallet__address-wrapper">
        <b>Address:</b>{' '}
        <span className="wallet__address">
          {shortAddress ? partOfTheAddress : address}
        </span>
      </p>

      <p className="wallet__balance-wrapper">
        <b>Balance:</b>{' '}
        <span>
          {fixBalance()} {type.toUpperCase()}
        </span>
      </p>
    </div>
  );
};
