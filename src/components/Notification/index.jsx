import './index.css';

export const Notification = (props) => {
  const { setShowNotification } = props;

  const closeNotification = () => {
    setShowNotification(true);
  };

  return (
    <div className="notification">
      <div className="notification__body">Notification text...</div>
      <button
        className="notification__close-button"
        onClick={closeNotification}
      >
        Close
      </button>
    </div>
  );
};
