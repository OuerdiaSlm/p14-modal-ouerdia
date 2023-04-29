import './modal.css';
import {useState} from 'react'

function Modal (){

    const [modal, setModal] = useState(true);

    const closeModal = () => {
        setModal(!modal);
    };

    return(
        <>
        {modal && (
        <section className="backgroundModal">
            <div className="modalDiv">
                <h1>Utilisateur enregistré</h1>
                <span className="close" onClick={(e)=>closeModal(e)}>X</span>
            </div>     
        </section>
        )}
        </>
    )
}

export default Modal;