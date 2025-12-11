const EditProfile = () => {
    return (
        <form className="popup__form">
            <input
              type="text"
              id="name-profile"
              value=""
              name="name"
              placeholder="Jacques Cousteau"
              className="popup__input popup__input_name"
              minLength="2"
              maxLength="30"
              required
            />
            <span className="popup__error" id="name-profile-error"></span>
            <input
              type="text"
              id="job-profile"
              value=""
              name="about"
              placeholder="Explorador"
              className="popup__input popup__input_description"
              minLength="2"
              maxLength="30"
              required
            />
            <span className="popup__error" id="job-profile-error"></span>
            <button type="click" className="submit" id="save-button">
              <span className="submit__text">Guardar</span>
            </button>
          </form>  
    );
};
export default EditProfile;