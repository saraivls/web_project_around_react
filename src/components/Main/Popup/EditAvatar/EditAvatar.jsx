const EditAvatar = () => {
    return (
       <form method="post" class="popup__form">
      <input
        type="url"
        id="avatar-link"
        name="avatar-link"
        className="popup__input popup__input_avatar-link"
        placeholder="URL de la nueva imagen"
        required
      />
      <span className="popup__error" id="avatar-link-error"></span>
      <button type="submit" className="submit" id="save-avatar">
        <span className="submit__text">Guardar</span>
      </button>
    </form>
    );
}; 
export default EditAvatar;