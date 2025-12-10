export default function Popup(props) {
  

  const {title, children, onClose} = props;
  return (
    <div className="popup">
      <div className={`popup__container ${!title ? 'popup__image-box' : ''}`}>
        <button className="close" 
        id="close-button"
        onClick={onClose}
        >x</button>
        {title ? <h2 className="popup__title">{title}</h2> : null}
        {children}
      </div>
    </div>
  );
}