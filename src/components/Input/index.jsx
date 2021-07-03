import './index.css';

const doNothing = () => null;

export const Input = (props) => {
  const { type, onChange = doNothing } = props;

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
        onChange={() => {
          onChange();
          checkAddressInput();
        }}
        className="input mono-font"
        type="text"
        placeholder="Recipient address"
      />
    );
  } else if (type === 'amount') {
    return (
      <input
        onChange={onChange}
        className="input mono-font"
        type="number"
        placeholder="Amount"
      />
    );
  }

  return (
    <input
      onChange={onChange}
      className="input"
      type="text"
      placeholder="..."
    />
  );
};
