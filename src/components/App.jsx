


import {useState} from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Main from "./Main/Main";
import EditAvatar from "./Main/Popup/EditAvatar/EditAvatar";
import EditProfile from "./Main/Popup/EditProfile/EditProfile";
import NewCard from "./Main/Popup/NewCard/NewCard";
import Popup from "./Main/Popup/Popup";


function App() {
  const [popup, setPopup] = useState(null)
  const popupEditAvatar = {
    title: "Cambiar foto de perfil",
    children: <EditAvatar />
  }
  const popupEditProfile = {
    title: "Editar perfil",
    children: <EditProfile />
  }

  const popupNewCard ={
    title: "Nuevo Lugar",
    children: <NewCard />
  }
  

  return (<div className="page">
     <Header />
     <Main 
     onClickEditProfile={() => setPopup(popupEditProfile)}
     onClickEditAvatar={() => setPopup(popupEditAvatar)}
     onClickAddCard={() => setPopup(popupNewCard)}
      onClickCard={(popupCard) => setPopup(popupCard)}
     />
    <Footer /> 
      {popup && <Popup title={popup.title} onClose={() => setPopup(null)}>{popup.children}</Popup>} 
    </div>
  )
};

export default App
