import { useState } from "react";


const NewCard = () => {

  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

    return (
        <form className="popup__form">
            <input
              name="card-title" 
              type="text"
              id="card-title"
              value={title}                         
              onChange={(e) => setTitle(e.target.value)}  
              placeholder="Title"
              className="popup__input popup__input_card-title"
              minLength="2"
              maxLength="30"
              required
            />
            <span className="popup__error" id="card-title-error"></span>
            <input
              name="card-url"
              type="url"
              id="card-url"
              value={url}                          
              onChange={(e) => setUrl(e.target.value)}
              placeholder="URL"
              className="popup__input popup__input_card-url"
              required
            />
            <span className="popup__error" id="card-url-error"></span>
            <button type="click" className="submit" id="save-card">
              <span className="submit__text">Crear</span>
            </button>
          </form>
    );
};

export default NewCard;