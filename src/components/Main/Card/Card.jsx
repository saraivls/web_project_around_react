import CardImage from "../Popup/CarImage/CardImage";

const Card = (props) => {
    const {card, onClick} = props;
    const {name, link, isLiked} = card;

    const popupImage= {
       title: "",
       children: <CardImage name={name} link={link} />
    }

return (
      <div className="card" id="card">
          <img className="card__image" 
          src={link} alt="" 
          onClick={() => onClick(popupImage)}
          />
          <div className="card__elements">
          <button className="card__remove-button"></button>
          <p className="card__text">{name}</p>
          <button className={`card__like-button ${isLiked ? 'liked-button' : ''}`}></button>
          </div>
      </div>);
}; 

export default Card;