import React from 'react'
import Modal from 'react-modal'
import "../../Components/FichaProducao/modal.css"

const MyModal = ({ isOpen, handleClose, errorMessage }) => {
  return (
    <Modal isOpen={isOpen} className="modalProduction">
      <h2>{errorMessage}</h2>
      <button onClick={handleClose} className='btnModalProduction'>Fechar</button>
    </Modal>
  )
}
export default MyModal;

