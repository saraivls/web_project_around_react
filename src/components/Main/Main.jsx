import avatarImg from "../../images/Avatar.png";
import pencilImg from "../../images/pencil_act_profile.png";
import plusImg from "../../images/sumar.png";
import Card from "./Card/Card.jsx";


const cards = [
  {
    isLiked: false,
    _id: '5d1f0611d321eb4bdcd707dd',
    name: 'Yosemite Valley',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:10:57.741Z',
  },
  {
    isLiked: false,
    _id: '5d1f064ed321eb4bdcd707de',
    name: 'Lake Louise',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:11:58.324Z',
  },
]; 


const Main = (props) => {   
  const {
    onClickEditProfile, 
    onClickEditAvatar, 
    onClickAddCard,
    onClickCard} = props;

    return (
        <main className="content">
        <div className="profile">
          <div className="profile__cont" onClick= {onClickEditAvatar}><img
            className="profile__avatar"
            src={avatarImg}
            alt="foto de avatar"
          />
           <img
              className="profile__avatar-pencil"
              src={pencilImg}
              alt=" Editar avatar"   
            />
          </div>
          <div className="profile__info">
            <div className="profile__details">
                <h1 className="profile__name">Jacques Cousteau</h1>
                <button className="button" id="edit-button">
                    <img
                      className="button__image"
                      src={pencilImg}
                      alt="button"
                      onClick= {onClickEditProfile}
                    />
                </button>
            </div>
            <p className="profile__text">Explorador</p>
          </div>
          <button className="add-button" id="add-card">
            <img className="add-button__image" 
            src={plusImg} 
            alt="agregar tarjeta" 
            onClick= {onClickAddCard}
            />
          </button>          
        </div>
        <section className="gallery">
            <div className="gallery__cards">
                    {cards.map((card) => (
                      <Card key={card._id} card={card} onClick ={onClickCard}/>
                    ))}                        
            </div>
        </section>
      </main>

    );
 };

 export default Main;