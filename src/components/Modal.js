import './style/style.css';


const Modal = () => {
    const close = () => {
        document.querySelector(".modal").style.display = "none";
    }
    return(
        <div className="modal">
            <div className="modal-body">
                <div onClick={close}>&times;</div><hr/>
                <span className="span">
              
                </span>
            </div>
        </div>
    );
}

export default Modal;