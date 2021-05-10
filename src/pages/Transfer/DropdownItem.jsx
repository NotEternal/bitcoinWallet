export const DropdownItem = (props) => {
  const { ticker, address } = props;

  return (
    <div className="dropdown-item">
      <span className="dropdown-item__ticker">{ticker}</span>
      <span className="dropdown-item__address">{address}</span>
    </div>
  );
};
