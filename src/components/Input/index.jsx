import './index.css';

export const Input = (props) => {
  const { type, onChange } = props;

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
          onChange()
          checkAddressInput()
        }}
        className="input"
        type="text"
        placeholder="Recipient address"
      />
    );
  } else if (type === 'amount') {
    return <input onChange={onChange} className="input" type="number" placeholder="Amount" />;
  }

  return <input onChange={onChange} className="input" type="text" placeholder="..." />;
};
