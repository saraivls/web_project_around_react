const CardImage = (props) => {
    const {name, link} = props;
    return (
        <>
        <img id="popup-image" className="image-details" src={link} alt={name} />
        </>
    );
};

export default CardImage;