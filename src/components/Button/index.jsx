import './index.sass';

export const Button = (props) => {
  const { children, isLoading, onClick, type } = props;
  const doNothing = () => null;

  return (
    <button
      className={`button ${isLoading ? 'disable' : ''} ${type ? type : ''}`}
      onClick={isLoading ? doNothing : onClick}
    >
      {isLoading ? <span className="button__loader">Pending</span> : children}
    </button>
  );
};
