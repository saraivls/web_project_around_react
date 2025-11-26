import avatarImg from "../../images/Avatar.png";
import pencilImg from "../../images/pencil_act_profile.png";

const Main = () => {   
    return (
        <main className="content">
        <div className="profile">
          <div className="profile__cont"><img
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
                    />
                </button>
            </div>
            <p className="profile__text">Explorador</p>
          </div>
          <button className="add-button" id="add-card">
            <img className="add-button__image" 
            src="./images/sumar.png" 
            alt="agregar tarjeta" 
            />
          </button>          
        </div>
        <section className="gallery">
            <div className="gallery__cards">
                    
            </div>
        </section>
      </main>

    );
 };

 export default Main;