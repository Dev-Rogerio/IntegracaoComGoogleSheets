import React from "react";
import '../Modal/modal.css'
import ReactModal from "react-modal";
const ModalMassage = ({ isOpen, onClose, errors }) => {
  const firstErrorField = Object.keys(errors).find(key => errors[key]);

  return (
    <>
      <ReactModal isOpen={isOpen} onRequestClose={onClose} className='modal'>
        <div className="backgroundTransparent" onClick={onclose}>
          <div className="modalOpen modal-content">
            <header className="modal-header">
              <button className="btm-close close-button" onClick={onClose}><span className="spanModal close-icon">Close</span>X</button>
            </header>
            <main className="modal-body">
              <h1 modal-title>[ Error... ]</h1>
            </main>
            <article>
              <p className="modal-text">Por favor, Os campos devem ser preenchidos!</p>
            </article>
            <aside modal-aside>
              {firstErrorField && (
                <h3 className="animated-text">
                  {`O Campo ${firstErrorField}, é Obrigatório.`}
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