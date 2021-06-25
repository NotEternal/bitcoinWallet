import './index.sass';

export const Button = (props) => {
  const { children, isLoading, onClick } = props;
  const voidFunc = () => null;

  return (
    <button
      className={`button ${isLoading ? 'disable' : ''}`}
      onClick={isLoading ? voidFunc : onClick}
    >
      {isLoading ? <span className="button__loader">Pending</span> : children}
    </button>
  );
};
