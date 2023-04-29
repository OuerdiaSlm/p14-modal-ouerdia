import './modal.css';
import {useState} from 'react'

function Modal (){

    const [modal, setModal] = useState(true);

    const closeModal = () => {
        setModal(!modal);
    };

    return(
        <section>
            {modal && (
            <div className="backgroundModal">
                <div className="modalDiv">
                    <h1>Utilisateur enregistré</h1>
                    <span className="close" onClick={(e)=>closeModal(e)}>X</span>
                </div>     
            </div>
            )}
        </section>
    )
}

export default Modal;