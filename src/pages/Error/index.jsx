import './index.css';

export const Error = (props) => {
  const { name, message } = props;

  console.group('%c Error', 'color: red');
  console.log('name: ', name);
  console.log('message: ', message);
  console.groupEnd();

  return (
    <div className="errorPage">
      <h2>Error: {name}</h2>
      <p>{message}</p>
    </div>
  );
};
