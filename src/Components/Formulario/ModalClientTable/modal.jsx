import React, { useEffect } from "react";
import Modal from 'react-modal';

import "../ModalClientTable/modal.css"

const ModalCadCli = ({ isOpen, onRequestClose, message }) => {


  return (
    <>
      <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
        <div className="containerModalcadCli">
          <section className="modalCadCli">
            <h2>Cadastro de Cliente</h2>
            <p className="p_ModalCadCli">* {message}</p>
            <button onClick={onRequestClose} className="closeModalCadCli">Fechar</button>
          </section>
        </div>
      </Modal>

    </>
  )
}
export default ModalCadCli;