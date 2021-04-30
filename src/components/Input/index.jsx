import './index.css';

export const Input = (props) => {
  const { type } = props;

  if (type === 'address') {
    return (
      <input className="input" type="text" placeholder="Recipient address" />
    );
  } else if (type === 'amount') {
    return <input className="input" type="number" placeholder="Amount" />;
  }

  return <input className="input" type="text" placeholder="..." />;
};
