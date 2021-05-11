import './index.css';

export const Input = (props) => {
  const { type } = props;

  const checkAddressInput = (event) => {
    // TODO: how long can address be ?
    // const regExp = /\w{10,}/;
    // if (!event.value.match(regExp)) {
    //   event.preventDefault();
    // }
  };

  if (type === 'address') {
    return (
      <input
        className="input"
        type="text"
        placeholder="Recipient address"
        onChange={checkAddressInput}
      />
    );
  } else if (type === 'amount') {
    return <input className="input" type="number" placeholder="Amount" />;
  }

  return <input className="input" type="text" placeholder="..." />;
};
