const CardImage = (props) => {
    const {name, link} = props;
    
return (
<>
<img id="popup-image" className="image-details" src={link} alt="" />  
 <h2 id="popup-label" className="popup__input_card-title">{name}</h2>
</>
);
}

export default CardImage;
