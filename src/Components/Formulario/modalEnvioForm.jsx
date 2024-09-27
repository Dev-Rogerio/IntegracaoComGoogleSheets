import React from "react";
import './modalEnvioForm.css';

const ModalEnvioForm = ({ isOpen, closeModal }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Formulário enviado com sucesso!</h2>
        <button className="close-button" onClick={closeModal}>
          Fechar
        </button>
      </div>
    </div>
  );
};

export default ModalEnvioForm;
