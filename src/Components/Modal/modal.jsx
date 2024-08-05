import React from "react";
import '../Modal/modal.css'
import ReactModal from "react-modal";

const ModalMassage = ({ isOpen, onClose, errors }) => {
  const firstErrorField = Object.keys(errors).find(key => errors[key]);

  return (
    <>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={onClose}
        className='modal'
        overlayClassName='overlay'
      >
        <div className="backgroundTransparent" onClick={onClose}>
          <div className="modalOpen modal-content">
            <header className="headerModal">
              <span className="spanModal close-icon">FECHAR</span>
              <button className="btm-close close-button" onClick={onClose}>X</button>
            </header>
            <article>
              <p className="modal-text">"Por favor, Os campos devem ser preenchidos!"</p>
            </article>
            <aside modal-aside>
              {firstErrorField && (
                <h3 className="animated-text">
                  {`O Campo [ ${firstErrorField} ] é Obrigatório.`}
                </h3>
              )}
            </aside>
          </div>
        </div>
      </ReactModal>
    </>
  )
}
export default ModalMassage